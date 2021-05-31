import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {ResultknowledgeComponent } from './resultknowledge.component';
import { HomePageRoutingModule } from './resultknowledge-routing.module';



@NgModule({
  declarations: [ResultknowledgeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ResultknowledgeModule { }
