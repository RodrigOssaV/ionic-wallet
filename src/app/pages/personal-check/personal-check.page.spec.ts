import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalCheckPage } from './personal-check.page';

describe('PersonalCheckPage', () => {
  let component: PersonalCheckPage;
  let fixture: ComponentFixture<PersonalCheckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
