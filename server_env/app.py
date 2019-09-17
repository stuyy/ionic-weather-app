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

@app.route("/api/weather/")
async def home(request):
    cities = request.args['cities']
    print(cities)
    data = await weather.get_weather(cities[0])
    return response.json(data.json())

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

