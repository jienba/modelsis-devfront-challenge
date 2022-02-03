import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../interfaces/city";
import {WeatherData} from "../interfaces/weatherData";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/`

  constructor(private  http: HttpClient) { }


  getCity(latitude: number, longitude: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.URL_API}search/?lattlong=${latitude},${longitude}`)
  }

  getWeatherData(woeid: number): Observable<unknown>{
    return this.http.get<unknown>(`${this.URL_API}${woeid}`)
  }

}
