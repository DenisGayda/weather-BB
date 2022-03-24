import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { instance, mock } from 'ts-mockito';

import { forecastDtoMock } from '../../../testing/forecast-dto.mock';
import { DailyForecastModule } from '../../components/daily-forecast/daily-forecast.module';
import { FullscreenErrorModule } from '../../components/fullscreen-error/fullscreen-error.module';
import { FullscreenLoaderModule } from '../../components/fullscreen-loader/fullscreen-loader.module';
import { ForecastApiService } from '../../services/forecast-api/forecast-api.service';
import { ForecastPageComponent } from './forecast.page.component';

const CITY = 'London';

describe('ForecastPageComponent', () => {
	let component: ForecastPageComponent;
	let fixture: ComponentFixture<ForecastPageComponent>;
	let routerMock: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ForecastPageComponent],
			imports: [
				RouterTestingModule,
				DailyForecastModule,
				FullscreenLoaderModule,
				FullscreenErrorModule,
			],
			providers: [
				{
					provide: ForecastApiService,
					useFactory: () => instance(mock(ForecastApiService)),
				},
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: {id: CITY}, data: {forecast: forecastDtoMock}}}
        }
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ForecastPageComponent);
		component = fixture.componentInstance;
		routerMock = TestBed.inject(Router);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('#backToHomePage should call router navigate to main page', () => {
		const button = fixture.debugElement.query(By.css('.back-button'));
		const spy = jest.spyOn(routerMock, 'navigateByUrl')
		spy.mockImplementation(() => Promise.resolve(true))
		button.triggerEventHandler('click', {});
		fixture.detectChanges();

		expect(spy).toBeCalledWith('main')
	});
});
