import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {City} from "../interfaces/city";
import {WeatherData} from "../interfaces/weatherData";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private URL_API = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/`

    constructor(private http: HttpClient) {
    }


    getCity(latitude: number, longitude: number): Observable<City[]> {
        return this.http.get<City[]>(`${this.URL_API}search/?lattlong=${latitude},${longitude}`)
            .pipe(
                catchError(this.handleError)
            )
    }

    getWeatherData(woeid: number): Observable<unknown> {
        return this.http.get<unknown>(`${this.URL_API}${woeid}`)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        if (err.status === 403){
            alert('Error occured while getting informations. Please go to the following link https://cors-anywhere.herokuapp.com/corsdemo and follow instruction');
        }else {
            alert('Unexcepted error occured. Please try again')
        }
        return throwError(err)
    }
}
