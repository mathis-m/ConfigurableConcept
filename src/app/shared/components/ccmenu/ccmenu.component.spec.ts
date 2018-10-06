import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCMenuComponent } from './ccmenu.component';

describe('CCMenuComponent', () => {
  let component: CCMenuComponent;
  let fixture: ComponentFixture<CCMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
