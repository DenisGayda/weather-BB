import { WeatherItemDto } from './weather-item.dto';
import { WeatherMainDto } from './weather-main.dto';
import { WindDto } from './wind.dto';

export interface WeatherDto {
	id: number,
	name: string,
	coord: {
		lon: number,
		lat: number,
	},
	sys: {
		country: string,
		sunrise: number,
		sunset: number,
	},
	main: WeatherMainDto
	wind: WindDto,
	clouds: {
		all: number,
	},
	rain?: {
		['1h']: number,
		['3h']: number,
	}
	snow?: {
		['1h']: number,
		['3h']: number,
	}
	weather: WeatherItemDto[],
}
