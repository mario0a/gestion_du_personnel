import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersonneComponent } from './newpersonne.component';

describe('NewpersonneComponent', () => {
  let component: NewpersonneComponent;
  let fixture: ComponentFixture<NewpersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
