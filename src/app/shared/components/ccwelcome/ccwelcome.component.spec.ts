import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCWelcomeComponent } from './ccwelcome.component';

describe('CCWelcomeComponent', () => {
  let component: CCWelcomeComponent;
  let fixture: ComponentFixture<CCWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
