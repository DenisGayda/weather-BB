import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WeatherI } from '../../configs/interfaces/weather.interface';

@Component({
    selector: 'app-city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent {
    @Input() cityWeather: WeatherI | undefined;
}
