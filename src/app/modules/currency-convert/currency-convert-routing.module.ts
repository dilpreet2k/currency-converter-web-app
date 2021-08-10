import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConvertComponent } from './currency-convert.component';

const routes: Routes = [{ path: '', component: CurrencyConvertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConvertRoutingModule { }
