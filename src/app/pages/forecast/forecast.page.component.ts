import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ForecastI } from '../../configs/interfaces/forecast.interface';

@Component({
	selector: 'app-forecast-page',
	templateUrl: './forecast.page.component.html',
	styleUrls: ['./forecast.page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastPageComponent implements OnInit {
	public forecast: ForecastI | null = null;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
	) {
	}

	ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.forecast = data ? data['forecast'] : null;
	}

	public backToHomePage(): void {
		this.router.navigateByUrl('main');
	}
}
