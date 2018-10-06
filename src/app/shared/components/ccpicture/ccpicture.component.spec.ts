import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCPictureComponent } from './ccpicture.component';

describe('CCPictureComponent', () => {
  let component: CCPictureComponent;
  let fixture: ComponentFixture<CCPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CCPictureComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
