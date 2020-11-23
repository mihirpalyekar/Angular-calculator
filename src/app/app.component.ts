import { Component } from '@angular/core';
import { from } from 'rxjs';
import {SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-calculator';
  update:boolean =false;
  constructor(updates:SwUpdate) {
    updates.available.subscribe((event)=>{
      updates.activateUpdate().then(()=>{
        document.location.reload();
      })
    })
  }
}
