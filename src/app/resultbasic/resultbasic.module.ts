import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {ResultbasicComponent } from './resultbasic.component';
import { HomePageRoutingModule } from './resultbasic-routing.module';



@NgModule({
  declarations: [ResultbasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ResultbasicModule { }
