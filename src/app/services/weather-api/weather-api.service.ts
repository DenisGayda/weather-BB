import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, EMPTY, forkJoin,Observable } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

import { API_KEY } from '../../configs/consts/api-key.const';
import { BASE_URL } from '../../configs/consts/base-url.const';
import { WeatherDto } from '../../configs/dtos/weather.dto';
import { WeatherI } from '../../configs/interfaces/weather.interface';
import { mapWeatherDtoToDataHelper } from './mapWeatherDtoToData.helper';

@Injectable({
	providedIn: 'root',
})
export class WeatherApiService {
	private readonly _error$ = new BehaviorSubject<HttpErrorResponse | null>(null);
	private readonly _isLoading$ = new BehaviorSubject<boolean>(false);

	constructor(
		private readonly http: HttpClient,
	) {}

	public get error$(): Observable<HttpErrorResponse | null> {
		return this._error$.asObservable();
	}

	public get isLoading$(): Observable<boolean> {
		return this._isLoading$.asObservable();
	}

	public getWeather$(cities: string[]): Observable<WeatherI[]> {
		this._isLoading$.next(true);

		return forkJoin(cities.map(city => this.makeRequest$<WeatherDto>(city)))
			.pipe(
				catchError(error => {
					this._error$.next(error);

					return EMPTY;
				}),
				map((dto: WeatherDto[]) => dto.map(mapWeatherDtoToDataHelper)),
				tap(() => this._error$.next(null)),
				finalize(() => this._isLoading$.next(false)),
			);
	}

	private makeRequest$<T>(city: string): Observable<T> {
		const url = `${BASE_URL}/data/2.5/weather`;
		const params: Params = {q: city, units: 'metric', appid: API_KEY};

		return this.http.get<T>(url, {params});
	}
}
