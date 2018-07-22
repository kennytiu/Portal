import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSectionComponent } from './portal-section.component';

describe('PortalSectionComponent', () => {
  let component: PortalSectionComponent;
  let fixture: ComponentFixture<PortalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
