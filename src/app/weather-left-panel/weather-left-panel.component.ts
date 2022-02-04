import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from "../interfaces/weatherData";

@Component({
    selector: 'weather-left-panel',
    templateUrl: './weather-left-panel.component.html',
    styleUrls: ['./weather-left-panel.component.css']
})
export class WeatherLeftPanelComponent implements OnInit {
    isSideBarOpen: boolean = false;
    @Input() public currentWeatherData!: WeatherData;


    constructor() {
    }

    ngOnInit(): void {
    }

    openSideBar() {
        this.isSideBarOpen = true;
    }

    closeSideBar() {
        this.isSideBarOpen = false
    }
}
