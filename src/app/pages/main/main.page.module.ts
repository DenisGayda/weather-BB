import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityCardModule } from '../../components/city-card/city-card.module';
import { FullscreenErrorModule } from '../../components/fullscreen-error/fullscreen-error.module';
import { FullscreenLoaderModule } from '../../components/fullscreen-loader/fullscreen-loader.module';
import { MainPageComponent } from './main.page.component';
import { MainPageRoutingModule } from './main.page.routing';

@NgModule({
	declarations: [
		MainPageComponent,
	],
	imports: [
		CommonModule,
		MainPageRoutingModule,
		CityCardModule,
		FullscreenLoaderModule,
		FullscreenErrorModule,
	],
})
export class MainPageModule {
}
