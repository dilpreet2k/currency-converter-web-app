import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/currencies', pathMatch: 'full' },
  { path: 'currencies', loadChildren: () => import('./modules/currency-list/currency-list.module').then(m => m.CurrencyListModule) },
  { path: 'convert-currency', loadChildren: () => import('./modules/currency-convert/currency-convert.module').then(m => m.CurrencyConvertModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
