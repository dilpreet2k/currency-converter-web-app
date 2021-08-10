/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CurrencyDocketComponent } from './currency-docket.component';

describe('CurrencyDocketComponent', () => {
  let component: CurrencyDocketComponent;
  let fixture: ComponentFixture<CurrencyDocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
