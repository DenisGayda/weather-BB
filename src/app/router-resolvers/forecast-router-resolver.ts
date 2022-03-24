import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ForecastI } from '../configs/interfaces/forecast.interface';
import { ForecastApiService } from '../services/forecast-api/forecast-api.service';

@Injectable({ providedIn: 'root' })
export class ForecastRouterResolver implements Resolve<ForecastI> {
  constructor(
    private router: Router,
    private readonly forecastApi: ForecastApiService,
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<ForecastI> {
    const cityName = route.paramMap.get('id');

    return this.forecastApi.getForecast$(<string>cityName)
      .pipe(
        catchError(() => {
          this.router.navigate(['/']);

          return EMPTY;
        }),
      );
  }
}
