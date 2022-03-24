import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WindInfoModule } from '../wind-info/wind-info.module';
import { DailyForecastComponent } from './daily-forecast.component';

@NgModule({
	declarations: [DailyForecastComponent],
	imports: [CommonModule, WindInfoModule],
	exports: [DailyForecastComponent],
})
export class DailyForecastModule {
}
