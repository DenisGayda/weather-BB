import { ForecastItemI } from './forecast-item.interface';

export interface DailyForecastI {
	day: number;
	info: ForecastItemI[]
}
