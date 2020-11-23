import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConvertorComponent } from './convertor.component';
import { RouterModule } from '@angular/router';
import { convertor } from './convertor-routing.module';

@NgModule({
  declarations: [
    ConvertorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(convertor)
  ],
  providers: [],
  bootstrap: [ConvertorComponent]
})
export class ConvertorModule { }
