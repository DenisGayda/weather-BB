import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DailyForecastModule } from '../../components/daily-forecast/daily-forecast.module';
import { ForecastPageComponent } from './forecast.page.component';
import { ForecastPageRoutingModule } from './forecast.page.routing';

@NgModule({
	declarations: [
		ForecastPageComponent,
	],
	imports: [
		CommonModule,
		ForecastPageRoutingModule,
		DailyForecastModule,
	],
})
export class ForecastPageModule {
}
