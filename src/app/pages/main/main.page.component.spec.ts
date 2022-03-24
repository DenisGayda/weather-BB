import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { instance, mock } from 'ts-mockito';

import { getHttpErrorResponse } from '../../../testing/get-http-error-response.helper';
import { getWeatherDtoByCity } from '../../../testing/get-weather-dto-by-city.helper';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { MainPageComponent } from './main.page.component';
import SpyInstance = jest.SpyInstance;
import { CityCardModule } from '../../components/city-card/city-card.module';
import { FullscreenErrorModule } from '../../components/fullscreen-error/fullscreen-error.module';
import { FullscreenLoaderModule } from '../../components/fullscreen-loader/fullscreen-loader.module';
import { mapWeatherDtoToDataHelper } from '../../services/weather-api/mapWeatherDtoToData.helper';
import * as helpers from './configs/get-random-cities.helper';

const cities = ['Paris', 'London', 'Madrid', 'Berlin', 'Sofia'];
const weatherDto = cities.map(getWeatherDtoByCity);

const isLoading$ = new BehaviorSubject<boolean>(false);
const error$ = new BehaviorSubject<HttpErrorResponse | null>(null)

describe('MainContainerComponent', () => {
	let component: MainPageComponent;
	let fixture: ComponentFixture<MainPageComponent>;
	let routerMock: Router;
	let weatherApiService: WeatherApiService;
	let getWeather$Spy: SpyInstance;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MainPageComponent],
			imports: [
				RouterTestingModule,
				CityCardModule,
				FullscreenLoaderModule,
				FullscreenErrorModule,
			],
			providers: [
				{
					provide: WeatherApiService,
					useFactory: () => instance(mock(WeatherApiService)),
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MainPageComponent);
		component = fixture.componentInstance;

		routerMock = TestBed.inject(Router);
		weatherApiService = TestBed.inject(WeatherApiService);

		getWeather$Spy = jest.spyOn(weatherApiService, 'getWeather$');
		getWeather$Spy.mockReset();
		getWeather$Spy.mockImplementation(() => of(weatherDto.map(mapWeatherDtoToDataHelper)));

		jest.spyOn(weatherApiService, 'isLoading$', 'get').mockReturnValue(isLoading$.asObservable());
		jest.spyOn(weatherApiService, 'error$', 'get').mockReturnValue(error$.asObservable());
		jest.spyOn(helpers, 'getRandomCities').mockReturnValue(cities);

		isLoading$.next(false);
		error$.next(null);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('#ngOnInit should call WeatherApiService getWeather$ method', () => {
		expect(getWeather$Spy).toBeCalledWith(cities);
	});

	it('#goToForecast should call router navigate to forecast page', () => {
		const cards: ArrayLike<HTMLElement> = fixture.nativeElement.querySelectorAll('.city-card');
		const londonCard = Array.from(cards)
			.find((item: HTMLElement) => item.querySelector('.city')?.textContent?.trim() === 'London');
		const spy = jest.spyOn(routerMock, 'navigateByUrl');

		spy.mockImplementation(() => Promise.resolve(true));
		(<HTMLElement>londonCard).click();
		fixture.detectChanges();

		expect(spy).toBeCalledWith('forecast/London')
	});

	it('Should contain 5 city cards', () => {
		const cards: ArrayLike<HTMLElement> = fixture.nativeElement.querySelectorAll('.city-card');

		expect(cards.length).toBe(5);
	});

	it('Should show loader during request', () => {
		isLoading$.next(true);
		fixture.detectChanges();

		const loader = fixture.debugElement.query(By.css('app-fullscreen-loader'));

		expect(loader).not.toBe(null);
	});

	it('Should show error if the request failed', () => {
		error$.next(getHttpErrorResponse());
		fixture.detectChanges();

		const error = fixture.debugElement.query(By.css('app-fullscreen-error'));

		expect(error).not.toBe(null);
	});
});
