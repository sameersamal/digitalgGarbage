import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverUpdateComponent } from "./driverupdate.component";

describe('UpdateComponent', () => {
  let component: DriverUpdateComponent;
  let fixture: ComponentFixture<DriverUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
