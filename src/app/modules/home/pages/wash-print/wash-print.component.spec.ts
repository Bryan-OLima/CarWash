import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashPrintComponent } from './wash-print.component';

describe('WashPrintComponent', () => {
  let component: WashPrintComponent;
  let fixture: ComponentFixture<WashPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
