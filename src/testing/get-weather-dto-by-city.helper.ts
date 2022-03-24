import { WeatherDto } from '../app/configs/dtos/weather.dto';
import { weatherDtoMock } from './weather-dto.mock';

export function getWeatherDtoByCity(city: string): WeatherDto {
	return {...weatherDtoMock, name: city};
}

