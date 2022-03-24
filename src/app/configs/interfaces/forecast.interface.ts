import { MonthForecastI } from './month-forecast.interface';

export interface ForecastI {
	id: number,
	name: string,
	months: MonthForecastI[],
}
