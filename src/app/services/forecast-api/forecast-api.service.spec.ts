import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { instance, mock } from 'ts-mockito';

import { forecastDtoMock } from '../../../testing/forecast-dto.mock';
import { API_KEY } from '../../configs/consts/api-key.const';
import { BASE_URL } from '../../configs/consts/base-url.const';
import { ForecastApiService } from './forecast-api.service';
import { mapForecastDtoToDataHelper } from './mapForecastDtoToData.helper';
import DoneCallback = jest.DoneCallback;
import SpyInstance = jest.SpyInstance;

const CITY = 'Madrid';

describe('ForecastApiService', () => {
	let service: ForecastApiService;
	let mockHttpClient = instance(mock(HttpClient))
	let getRequestSpy: SpyInstance;

	beforeEach(() => {
		service = new ForecastApiService(mockHttpClient);
		getRequestSpy = jest.spyOn(mockHttpClient, 'get');
		getRequestSpy.mockReset();
	});

	it('#getForecast$ should call HttpClient get method', () => {
		getRequestSpy.mockImplementation(() => of({}));

		service.getForecast$(CITY).subscribe();
		expect(mockHttpClient.get).toBeCalled();
	});

	it('#getForecast$ should call HttpClient get method with right parameter', () => {
		getRequestSpy.mockImplementation(() => of({}));

		const url = `${BASE_URL}/data/2.5/forecast`;
		const params: Params = {q: CITY, units: 'metric', appid: API_KEY};

		service.getForecast$(CITY).subscribe();
		expect(mockHttpClient.get).toBeCalledWith(url, {params});
	});

	it('#getForecast$ should return mapped value after success request', (done: DoneCallback) => {
		getRequestSpy.mockImplementation(() => of(forecastDtoMock));

		service.getForecast$(CITY).subscribe(value => {
			expect(value).toEqual(mapForecastDtoToDataHelper(forecastDtoMock));
			done();
		});
	});
});
