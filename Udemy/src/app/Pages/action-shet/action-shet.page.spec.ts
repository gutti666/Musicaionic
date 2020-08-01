import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionShetPage } from './action-shet.page';

describe('ActionShetPage', () => {
  let component: ActionShetPage;
  let fixture: ComponentFixture<ActionShetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionShetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionShetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
