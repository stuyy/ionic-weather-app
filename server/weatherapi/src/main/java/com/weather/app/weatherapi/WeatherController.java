package com.weather.app.weatherapi;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class WeatherController {
    @RequestMapping("/")
    public String index() {
        return "Greetings.";
    }
}