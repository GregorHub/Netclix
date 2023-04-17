import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchframeComponent } from './watchframe.component';

describe('WatchframeComponent', () => {
  let component: WatchframeComponent;
  let fixture: ComponentFixture<WatchframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
