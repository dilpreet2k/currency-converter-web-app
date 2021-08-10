import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyListRoutingModule } from './currency-list-routing.module';
import { CurrencyListComponent } from './currency-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyDocketComponent } from './currency-docket/currency-docket.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyDocketComponent
  ],
  imports: [
    CommonModule,
    CurrencyListRoutingModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class CurrencyListModule { }
