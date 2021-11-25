import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistausuariosComponent } from './vlistausuarios.component';

describe('VlistausuariosComponent', () => {
  let component: VlistausuariosComponent;
  let fixture: ComponentFixture<VlistausuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlistausuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistausuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
