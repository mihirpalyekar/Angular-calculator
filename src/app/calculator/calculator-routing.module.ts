import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator.component';

export const calculatorRoutes: Routes = [
 {
  path:'calculator',component:CalculatorComponent
 }
];