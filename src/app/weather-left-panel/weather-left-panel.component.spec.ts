import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLeftPanelComponent } from './weather-left-panel.component';

describe('WeatherLeftPanelComponent', () => {
  let component: WeatherLeftPanelComponent;
  let fixture: ComponentFixture<WeatherLeftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLeftPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
