import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassLinkComponent } from './new-class-link.component';

describe('NewClassLinkComponent', () => {
  let component: NewClassLinkComponent;
  let fixture: ComponentFixture<NewClassLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
