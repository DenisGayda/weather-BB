import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WindInfoModule } from '../wind-info/wind-info.module';
import { CityCardComponent } from './city-card.component';

@NgModule({
	declarations: [CityCardComponent],
	imports: [CommonModule, WindInfoModule],
	exports: [CityCardComponent],
})
export class CityCardModule {
}
