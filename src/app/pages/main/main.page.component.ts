import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherI } from '../../configs/interfaces/weather.interface';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { getRandomCities } from './configs/get-random-cities.helper';

const COUNT_OF_CITIES_TO_SHOW = 5;

@Component({
	selector: 'app-main-page',
	templateUrl: './main.page.component.html',
	styleUrls: ['./main.page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
	public weathers$: Observable<WeatherI[]> | undefined;
	public isLoading$: Observable<boolean> | undefined;
	public error$: Observable<HttpErrorResponse | null> | undefined;

	constructor(
		private readonly weatherApi: WeatherApiService,
		private readonly router: Router,
	) {}

	ngOnInit(): void {
		this.weathers$ = this.weatherApi.getWeather$(getRandomCities(COUNT_OF_CITIES_TO_SHOW));
		this.isLoading$ = this.weatherApi.isLoading$;
		this.error$ = this.weatherApi.error$;
	}
	
	public goToForecast(cityName: string): void {
		this.router.navigateByUrl(`forecast/${cityName}`);
	}
}
