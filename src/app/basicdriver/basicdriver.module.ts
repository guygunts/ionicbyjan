import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {BasicdriverComponent } from './basicdriver.component';

import { HomePageRoutingModule } from './basicdriver-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [BasicdriverComponent]
})
export class BasicdriverModule { }
