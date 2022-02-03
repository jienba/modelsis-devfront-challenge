import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
import { WeatherLeftPanelComponent } from './weather-left-panel/weather-left-panel.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        WeatherLeftPanelComponent,
        WeatherForecastComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
