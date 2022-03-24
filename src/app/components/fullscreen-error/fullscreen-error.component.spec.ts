import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenErrorComponent } from './fullscreen-error.component';

describe('FullscreenErrorComponent', () => {
	let component: FullscreenErrorComponent;
	let fixture: ComponentFixture<FullscreenErrorComponent>;
	
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FullscreenErrorComponent],
		})
			.compileComponents();
	});
	
	beforeEach(() => {
		fixture = TestBed.createComponent(FullscreenErrorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
