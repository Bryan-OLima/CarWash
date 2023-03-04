import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashDetailsComponent } from './wash-details.component';

describe('WashDetailsComponent', () => {
  let component: WashDetailsComponent;
  let fixture: ComponentFixture<WashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
