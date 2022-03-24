import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_KEY } from '../../configs/consts/api-key.const';
import { BASE_URL } from '../../configs/consts/base-url.const';
import { ForecastDto } from '../../configs/dtos/forecast.dto';
import { ForecastI } from '../../configs/interfaces/forecast.interface';
import { mapForecastDtoToDataHelper } from './mapForecastDtoToData.helper';

@Injectable({
	providedIn: 'root',
})
export class ForecastApiService {
	constructor(private readonly http: HttpClient) {
  }

	public getForecast$(city: string): Observable<ForecastI> {
		const url = `${BASE_URL}/data/2.5/forecast`;
		const params: Params = {q: city, units: 'metric', appid: API_KEY};

		return this.http.get<ForecastDto>(url, {params})
			.pipe(
				map(mapForecastDtoToDataHelper),
			);
	}
}
