import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchframeComponent } from './searchframe.component';

describe('SearchframeComponent', () => {
  let component: SearchframeComponent;
  let fixture: ComponentFixture<SearchframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
