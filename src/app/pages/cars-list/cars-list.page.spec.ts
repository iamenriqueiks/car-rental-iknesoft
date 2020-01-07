import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarsListPage } from './cars-list.page';

describe('CarsListPage', () => {
  let component: CarsListPage;
  let fixture: ComponentFixture<CarsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
