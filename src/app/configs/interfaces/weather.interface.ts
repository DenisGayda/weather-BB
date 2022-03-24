export interface WeatherI {
	id: number,
	name: string,
	temperature: number,
	wind_speed: number,
    wind_direction_deg: number,
	description: string,
	weather_icon_url: string,
	humidity: number,
}
