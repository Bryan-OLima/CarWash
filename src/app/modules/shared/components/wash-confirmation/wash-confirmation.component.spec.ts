import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashConfirmationComponent } from './wash-confirmation.component';

describe('WashConfirmationComponent', () => {
  let component: WashConfirmationComponent;
  let fixture: ComponentFixture<WashConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
