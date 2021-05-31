import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ResultexamComponent } from './resultexam.component';
import { HomePageRoutingModule } from './resultexam-routing.module';
@NgModule({
  declarations: [ResultexamComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ResultexamModule { }
