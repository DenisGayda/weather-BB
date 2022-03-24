import { WeatherDto } from '../../configs/dtos/weather.dto';
import { WeatherI } from '../../configs/interfaces/weather.interface';
import { getIconUrlFromCodeHelper } from '../../helpers/get-icon-url-from-code.helper';

export function mapWeatherDtoToDataHelper(dto: WeatherDto): WeatherI {
	const {id, name, main: {temp, humidity}, wind: {speed, deg}, weather} = dto;
	const {description, icon} = weather[0];

	return {
		id,
		name,
		temperature: temp,
		wind_speed: speed,
        wind_direction_deg: deg,
		description,
		humidity,
		weather_icon_url: getIconUrlFromCodeHelper(icon),
	}
}
