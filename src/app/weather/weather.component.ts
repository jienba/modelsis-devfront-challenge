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
    }

    getCurrentCity() {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            this.weatherAPI.getCity(latitude, longitude)
                .subscribe(
                    value => {
                        [this.city] = value;
                        // console.log('city');
                        // console.log(this.city);

                        this.weatherAPI.getWeatherData(this.city.woeid)
                            .subscribe(value1 => {
                                // @ts-ignore
                                [this.currentWeatherData] = value1.consolidated_weather;
                                console.log(this.currentWeatherData);

                                // @ts-ignore
                                let {consolidated_weather} = value1;
                                this.consolidated_weather = consolidated_weather;

                                console.log(this.consolidated_weather);


                            })
                    },
                    error => {
                        console.log(error)
                    }
                )
        }, positionError => {

        })
    }


}
