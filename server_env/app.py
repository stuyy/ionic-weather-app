from sanic import Sanic
from sanic_cors import CORS, cross_origin
import sanic.response as response
import requests_async as requests
import json
from Weather import Weather, OpenStreetMap
app = Sanic()
CORS(app)
def load_api_key():
    with open('./config/config.json', 'r') as f:
        return json.load(f)['WEATHER_API']

API_KEY = load_api_key()
weather = Weather(API_KEY)
osm = OpenStreetMap()

'''
    Reference the args from the request object. Loop through the cities list and make requests to each city, appending the returned data to weather_results list.
'''
@app.route("/api/weather/")
async def home(request):
    cities = request.args['cities']
    weather_results = []
    for city in cities:
        temp_city = {}
        data = await weather.get_weather(city)
        temp_city['city'] = data['name']
        temp_city['state'] = await osm.get_state(data['coord']['lat'],data['coord']['lon'])
        temp_city['country'] = data['sys']['country']
        temp_city['temperature'] = data['main']['temp']
        temp_city['conditions'] = data['weather']
        temp_city['maxTemp'] = data['main']['temp_max']
        temp_city['minTemp'] = data['main']['temp_min']
        temp_city['icon'] = 'sunny'
        weather_results.append(temp_city)
    return response.json(weather_results)

@app.route("/api/forecast/<city>")
async def forecast_route(request, city):
    data = await weather.get_forecast(city)
    coords = {
        "lat" : data['city']['coord']['lat'],
        "lon" : data['city']['coord']['lon']
    }
    data['city_data'] = await osm.get_location(coords['lat'], coords['lon'])
    return response.json(data)

if __name__ == "__main__":
    app.run('0.0.0.0', port=3000, debug=True)

