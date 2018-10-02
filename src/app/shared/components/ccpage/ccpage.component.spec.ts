import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCPageComponent } from './ccpage.component';

describe('CCPageComponent', () => {
  let component: CCPageComponent;
  let fixture: ComponentFixture<CCPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
