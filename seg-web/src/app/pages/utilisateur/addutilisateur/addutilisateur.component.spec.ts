import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddutilisateurComponent } from './addutilisateur.component';

describe('AddutilisateurComponent', () => {
  let component: AddutilisateurComponent;
  let fixture: ComponentFixture<AddutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddutilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
