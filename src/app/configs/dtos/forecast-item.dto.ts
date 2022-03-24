import { WeatherItemDto } from './weather-item.dto';
import { WeatherMainDto } from './weather-main.dto';
import { WindDto } from './wind.dto';

export interface ForecastItemDto {
	weather: WeatherItemDto[],
	wind: WindDto,
	main: WeatherMainDto,
	dt_txt: string,
}
