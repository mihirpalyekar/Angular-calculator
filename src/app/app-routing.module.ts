import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
      { path: 'home', component:HomeComponent},
      { path: 'calculator', loadChildren:()=>import('./calculator/calculator.module').then((m)=>{m.calculatorModule})},
      { path: 'convertor', loadChildren:()=>import('./convertor/convertor.module').then((m)=>{m.ConvertorModule}) },
      {
        path:'', redirectTo:'home',pathMatch:'full'
      },
      {
        path: '**', component:HomeComponent
            }
    ];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
