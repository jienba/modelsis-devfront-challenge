import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'weather-left-panel',
    templateUrl: './weather-left-panel.component.html',
    styleUrls: ['./weather-left-panel.component.css']
})
export class WeatherLeftPanelComponent implements OnInit {
    isSideBarOpen: boolean = false;

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
