import { ForecastItemDto } from './forecast-item.dto';

export interface ForecastDto {
	city: {
		country: string
		id: number,
		name: string,
		coord: {
			lon: number,
			lat: number,
		},
	},
	list: ForecastItemDto[]
}

