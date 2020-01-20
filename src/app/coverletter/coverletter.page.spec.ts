import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverLetterPage } from './coverletter.page';

describe('CoverLetterPage', () => {
  let component: CoverLetterPage;
  let fixture: ComponentFixture<CoverLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoverLetterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
