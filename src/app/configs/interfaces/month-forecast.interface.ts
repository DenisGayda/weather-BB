import { DailyForecastI } from './daily-forecast.interface';

export interface MonthForecastI {
	name: string,
	month: number,
	days: DailyForecastI[],
}
