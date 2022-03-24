import { ForecastDateI } from './forecast-date.interface';

export interface ForecastItemI {
	temperature: number,
	wind_speed: number,
	wind_direction_deg: number,
	weather_icon_url: string,
	humidity: number,
	date: ForecastDateI,
}
