import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMapsComponent } from './service-maps.component';

describe('ServiceMapsComponent', () => {
  let component: ServiceMapsComponent;
  let fixture: ComponentFixture<ServiceMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
