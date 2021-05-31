import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModalModule { }
