import requests_async as requests
class Weather:
    def __init__(self, token, units=None):
        self.token = token
        self.weather_base_url = "https://api.openweathermap.org/data/2.5/weather?q="
        self.forecast_base_url = "https://api.openweathermap.org/data/2.5/forecast?q="
        self.units = units or 'imperial'

    async def get_weather(self, city_name):
        url = self.weather_base_url + city_name + "&appid=" + self.token + "&units=" + self.units
        return await requests.get(url)

    async def get_forecast(self, city_name):
        url = "{}{}{}{}{}{}".format(self.forecast_base_url, city_name, "&appid=", self.token, "&units=", self.units)
        print(url)
        return (await requests.get(url)).json()