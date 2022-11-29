import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from "./components/error/error.component";
import {NoResultsComponent} from "./components/no-results/no-results.component";

@NgModule({
  declarations: [
    ErrorComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorComponent,
    NoResultsComponent,
  ]
})
export class SharedModule {
}
