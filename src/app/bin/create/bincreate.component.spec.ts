import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinCreateComponent } from './bincreate.component';

describe('CreateComponent', () => {
  let component: BinCreateComponent;
  let fixture: ComponentFixture<BinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
