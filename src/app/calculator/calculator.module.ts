import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { calculatorRoutes } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(calculatorRoutes)
  ],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class calculatorModule { }
