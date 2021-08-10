/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiteNavBarComponent } from './site-nav-bar.component';

describe('SiteNavBarComponent', () => {
  let component: SiteNavBarComponent;
  let fixture: ComponentFixture<SiteNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
