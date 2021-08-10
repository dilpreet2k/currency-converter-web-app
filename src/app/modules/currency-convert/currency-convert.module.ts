import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConvertRoutingModule } from './currency-convert-routing.module';
import { CurrencyConvertComponent } from './currency-convert.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CurrencyConvertComponent
  ],
  imports: [
    CommonModule,
    CurrencyConvertRoutingModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class CurrencyConvertModule { }
