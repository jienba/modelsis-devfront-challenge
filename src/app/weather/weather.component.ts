import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {City} from "../interfaces/city";
import {WeatherData} from "../interfaces/weatherData";

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    private city!: City;
    private consolidated_weather!: WeatherData[];
    private currentWeatherData!: WeatherData;


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
                        // console.log('city');
                        // console.log(this.city);

                        this.onGetDataWeather(this.city.woeid)
                    },
                    error => {
                        console.log(error)
                    }
                )
        }, positionError => {

        })
    }

    onGetDataWeather(woeid: number) {
        this.weatherAPI.getWeatherData(woeid)
            .subscribe(value => {
                // @ts-ignore
                [this.currentWeatherData] = value.consolidated_weather;
                console.log(this.currentWeatherData);

                // @ts-ignore
                let {consolidated_weather} = value;
                this.consolidated_weather = consolidated_weather;

                console.log(this.consolidated_weather);
            })
    }


}
