import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtramitesComponent } from './vtramites.component';

describe('VtramitesComponent', () => {
  let component: VtramitesComponent;
  let fixture: ComponentFixture<VtramitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtramitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
