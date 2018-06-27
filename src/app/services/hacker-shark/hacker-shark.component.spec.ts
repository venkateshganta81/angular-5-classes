import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerSharkComponent } from './hacker-shark.component';

describe('HackerSharkComponent', () => {
  let component: HackerSharkComponent;
  let fixture: ComponentFixture<HackerSharkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerSharkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
