import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCElementComponent } from './ccelement.component';

describe('CCElementComponent', () => {
  let component: CCElementComponent;
  let fixture: ComponentFixture<CCElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CCElementComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
