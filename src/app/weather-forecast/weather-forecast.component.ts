import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../interfaces/weatherData";

@Component({
    selector: 'weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
    @Input() public foreCasts!: WeatherData[];
    public  isDataAvailable: boolean = false;

    constructor() {}

    ngOnInit(): void {
        // DUE TO SLOWNESS OF API CALL, MAKING A TIMEOUT TO AVOID GETTING UNDEFINED THE FORECAST  WEATHER DATA
        setTimeout(() => {
            if (this.foreCasts.length > 0){
                this.isDataAvailable = !this.isDataAvailable;
                console.log(this.foreCasts);

            }
        }, 10000)

    }

    convertToDate(applicable_date: string) {
        const date = new Date(applicable_date);
        return date.toLocaleDateString();
    }
}
