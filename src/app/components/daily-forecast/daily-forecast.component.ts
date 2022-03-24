import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DailyForecastI } from '../../configs/interfaces/daily-forecast.interface';

@Component({
	selector: 'app-daily-forecast',
	templateUrl: './daily-forecast.component.html',
	styleUrls: ['./daily-forecast.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyForecastComponent {
	@Input() forecast: DailyForecastI | undefined;
	@Input() month: string = '';
}
