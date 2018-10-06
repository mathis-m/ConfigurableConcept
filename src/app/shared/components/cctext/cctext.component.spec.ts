import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCTextComponent } from './cctext.component';

describe('CCTextComponent', () => {
  let component: CCTextComponent;
  let fixture: ComponentFixture<CCTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CCTextComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
