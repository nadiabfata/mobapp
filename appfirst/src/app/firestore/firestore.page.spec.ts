import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirestorePage } from './firestore.page';

describe('FirestorePage', () => {
  let component: FirestorePage;
  let fixture: ComponentFixture<FirestorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
