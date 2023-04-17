import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowframeComponent } from './showframe.component';

describe('ShowframeComponent', () => {
  let component: ShowframeComponent;
  let fixture: ComponentFixture<ShowframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
