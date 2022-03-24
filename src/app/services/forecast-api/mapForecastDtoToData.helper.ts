import { ForecastDto } from '../../configs/dtos/forecast.dto';
import { ForecastItemDto } from '../../configs/dtos/forecast-item.dto';
import { DailyForecastI } from '../../configs/interfaces/daily-forecast.interface';
import { ForecastI } from '../../configs/interfaces/forecast.interface';
import { ForecastDateI } from '../../configs/interfaces/forecast-date.interface';
import { ForecastItemI } from '../../configs/interfaces/forecast-item.interface';
import { MonthForecastI } from '../../configs/interfaces/month-forecast.interface';
import { getIconUrlFromCodeHelper } from '../../helpers/get-icon-url-from-code.helper';

export function mapForecastDtoToDataHelper(dto: ForecastDto): ForecastI {
	const {city: {id, name}, list} = dto;
	
	return {
		id,
		name,
		months: groupForecastsByDay(list.map(mapForecastItemDtoToData)),
	}
}

function mapForecastItemDtoToData(dto: ForecastItemDto): ForecastItemI {
	const {main: {temp, humidity}, wind: {speed, deg}, dt_txt, weather} = dto;

	return {
		temperature: temp,
		wind_speed: speed,
		wind_direction_deg: deg,
		weather_icon_url: getIconUrlFromCodeHelper(weather[0].icon),
		humidity: humidity,
		date: formatDate(dt_txt),
	}
}

function formatDate(ISODate: string): ForecastDateI {
	const date = new Date(ISODate);
	
	return {
		month: date.getMonth(),
		monthName: date.toLocaleString('en-GB', { month: 'long' }),
		day: date.getDate(),
		timeString: date.toLocaleString('en-GB', {
			hour: 'numeric',
			hour12: true,
		}).toUpperCase(),
		time: date.toLocaleString('en-GB', {hour: '2-digit', hour12: false})
	};
}

function groupForecastsByDay(data: ForecastItemI[]): MonthForecastI[] {
	const temp: {[key: string]: TempMonthI} = {};
	
	for (let item of data) {
		const {monthName, day, month} = item.date;
		const monthTemp = temp[monthName];
		
		if(!!monthTemp) {
			const dayTemp = monthTemp.days[day];
			
			temp[monthName].days = {...monthTemp.days, [day]: !!dayTemp ? [...dayTemp, item] : [item]};
			
			continue;
		}
		
		temp[monthName] = {name: monthName, month, days: {[day]: [item]}};
	}

	return Object.values(temp).map(({name, days, month}: TempMonthI) => {
		const dayList: DailyForecastI[] = Object.values(days).map((items: ForecastItemI[]) => {
			return {info: items, day: items[0].date.day}
		})
		
		return {name, month, days: dayList}
	})
}

interface TempMonthI {
	name: string,
	month: number,
	days: {[key: string]: ForecastItemI[]},
}
