import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {KnowledgeComponent } from './knowledge.component';

import { HomePageRoutingModule } from './knowledge-routing.module';


@NgModule({
  declarations: [KnowledgeComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class KnowledgeModule { }
