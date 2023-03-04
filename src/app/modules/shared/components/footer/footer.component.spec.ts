import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { FooterComponent } from './footer.component';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let dialog: MatDialog;
  let eventEmitter: EventEmitter<number>;

  beforeEach(() => {
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    eventEmitter = new EventEmitter<number>();
    component = new FooterComponent(dialog);
    component.emitCounter = eventEmitter;
    localStorage.clear();
  });

  it('should initialize counter to 1', () => {
    component.ngOnInit();
    expect(component.counter).toBe(1);
  });

  it('should get counter data from local storage', () => {
    component.counter = 10;
    component.saveCounter();
    component.getCounterData();
    expect(component.counter).toBe(10);
  });

  it('should increment counter and save it to local storage', () => {
    component.incrementId();
    expect(component.counter).toBe(2);
    component.saveCounter();
    component.getCounterData();
    expect(component.counter).toBe(2);
  });

  it('should submit counter and emit event', () => {
    component.submitCounter();
    expect(component.counter).toBe(2);
    expect(eventEmitter.emit).toHaveBeenCalledWith(2);
  });

  it('should open modal and call submit counter', () => {
    component.openModal();
    expect(component.counter).toBe(2);
  });

  it('should open print window', () => {
    spyOn(window, 'open');
    component.openPrint();
    expect(window.open).toHaveBeenCalledWith('print');
  });

  it('should print', () => {
    spyOn(window, 'print');
    component.print();
    expect(window.print).toHaveBeenCalled();
  });
});