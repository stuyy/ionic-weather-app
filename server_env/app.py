from sanic import Sanic
import sanic.response as response
import requests_async as requests
import json

app = Sanic()

def load_api_key():
    with open('./config/config.json', 'r') as f:
        return json.load(f)['WEATHER_API']

API_KEY = load_api_key()

@app.route("/")
async def home(request):
    weather = await requests.get("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=new%20york&appid={}".format(API_KEY))
    print(weather.json())
    return response.json(weather.json())


if __name__ == "__main__":
    app.run('0.0.0.0', port=3000, debug=True)

