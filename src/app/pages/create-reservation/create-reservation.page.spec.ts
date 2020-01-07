import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateReservationPage } from './create-reservation.page';

describe('CreateReservationPage', () => {
  let component: CreateReservationPage;
  let fixture: ComponentFixture<CreateReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
