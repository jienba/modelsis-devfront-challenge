import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {City} from "../interfaces/city";
import {WeatherData} from "../interfaces/weatherData";

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    city!: City;
    consolidated_weather!: WeatherData[];
    currentWeatherData!: WeatherData;
    @Input() public foreCasts!: WeatherData[];


    constructor(private weatherAPI: WeatherService) {
    }

    ngOnInit(): void {
        this.getCurrentCityData()
    }

    getCurrentCityData() {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            this.weatherAPI.getCity(latitude, longitude)
                .subscribe(
                    value => {
                        [this.city] = value;
                        this.onGetDataWeather(this.city.woeid)
                    }
                )
        }, positionError => {
            console.log(positionError)
            alert('Cannot get the current position')

        })
    }

    onGetDataWeather(woeid: number) {
        this.weatherAPI.getWeatherData(woeid)
            .subscribe(value => {
                // @ts-ignore
                [this.currentWeatherData] = value.consolidated_weather;

                // @ts-ignore
                let {consolidated_weather} = value;
                this.consolidated_weather = consolidated_weather;
                this.consolidated_weather.shift();

                console.log(this.consolidated_weather);
            })
    }


    get humidity() {
        return this.currentWeatherData?.humidity
    }

    get wind_speed() {
        return this.currentWeatherData?.wind_speed
    }

    get air_pressure() {
        return this.currentWeatherData?.air_pressure
    }

    get visibility() {
        return this.currentWeatherData?.visibility
    }

    get wind_direction_compass() {
        return this.currentWeatherData?.wind_direction_compass
    }


}
