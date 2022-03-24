import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenLoaderComponent } from './fullscreen-loader.component';

describe('LoaderComponent', () => {
  let component: FullscreenLoaderComponent;
  let fixture: ComponentFixture<FullscreenLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
