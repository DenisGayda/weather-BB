import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { of, throwError } from 'rxjs';
import { instance, mock } from 'ts-mockito';

import { getHttpErrorResponse } from '../../../testing/get-http-error-response.helper';
import { weatherDtoMock } from '../../../testing/weather-dto.mock';
import { API_KEY } from '../../configs/consts/api-key.const';
import { BASE_URL } from '../../configs/consts/base-url.const';
import { mapWeatherDtoToDataHelper } from './mapWeatherDtoToData.helper';
import { WeatherApiService } from './weather-api.service';
import DoneCallback = jest.DoneCallback;
import SpyInstance = jest.SpyInstance;

const cities = ['Paris', 'London', 'Madrid', 'Berlin', 'Sofia'];
const singleCity = ['Paris'];

describe('WeatherApiService', () => {
	let service: WeatherApiService;
	let mockHttpClient = instance(mock(HttpClient))
	let getRequestSpy: SpyInstance;

	beforeEach(() => {
		service = new WeatherApiService(mockHttpClient);
		getRequestSpy = jest.spyOn(mockHttpClient, 'get');
		getRequestSpy.mockReset();
	});

	it('#error$ should return null', (done: DoneCallback) => {
		service.error$.subscribe(value => {
			expect(value).toBe(null);
			done();
		});
	});

	it('#error$ should return HttpErrorResponse after request crash', (done: DoneCallback) => {
		const error = getHttpErrorResponse();
		getRequestSpy.mockImplementation(() => throwError(error));

		service.error$.subscribe(value => {
			expect(value).toEqual(error);
			done();
		});
		service.getWeather$(singleCity).subscribe();
	});

	it('#isLoading$ should return false', (done: DoneCallback) => {
		service.isLoading$.subscribe(value => {
			expect(value).toBe(false);
			done();
		});
	});

	it('#isLoading$ should emit true after request init', (done: DoneCallback) => {
		getRequestSpy.mockImplementation(() => of({}));
		const subscriber = service.getWeather$(singleCity);
		service.isLoading$.subscribe(value => {
			expect(value).toBe(true);
			done();
		});
		subscriber.subscribe();
	});

	it('#getWeather$ should call HttpClient get method', () => {
		getRequestSpy.mockImplementation(() => of({}));

		service.getWeather$(singleCity).subscribe();
		expect(mockHttpClient.get).toBeCalled();
	});

	it('#getWeather$ should call HttpClient get method with right parameter', () => {
		getRequestSpy.mockImplementation(() => of({}));

		const url = `${BASE_URL}/data/2.5/weather`;
		const params: Params = {q: singleCity[0], units: 'metric', appid: API_KEY};

		service.getWeather$(singleCity).subscribe();
		expect(mockHttpClient.get).toBeCalledWith(url, {params});
	});

	it('#getWeather$ should call HttpClient get method 5 times', () => {
		getRequestSpy.mockImplementation(() => of(weatherDtoMock));
		service.getWeather$(cities).subscribe();

		expect(mockHttpClient.get).toBeCalledTimes(5);
	});

	it('#getWeather$ should return mapped value after success request', (done: DoneCallback) => {
		getRequestSpy.mockImplementation(() => of(weatherDtoMock));

		service.getWeather$(singleCity).subscribe(value => {
			expect(value).toEqual([mapWeatherDtoToDataHelper(weatherDtoMock)]);
			done();
		});
	});
});
