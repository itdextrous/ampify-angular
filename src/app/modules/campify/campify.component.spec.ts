import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampifyComponent } from './campify.component';

describe('CampifyComponent', () => {
  let component: CampifyComponent;
  let fixture: ComponentFixture<CampifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
