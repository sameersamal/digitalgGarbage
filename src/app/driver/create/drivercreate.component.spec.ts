import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCreateComponent } from './drivercreate.component';

describe('DriverCreateComponent', () => {
  let component: DriverCreateComponent;
  let fixture: ComponentFixture<DriverCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.CreateComponent(DriverCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
