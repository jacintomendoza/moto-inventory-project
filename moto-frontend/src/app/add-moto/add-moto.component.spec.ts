import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotoComponent } from './add-moto.component';

describe('AddMotoComponent', () => {
  let component: AddMotoComponent;
  let fixture: ComponentFixture<AddMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
