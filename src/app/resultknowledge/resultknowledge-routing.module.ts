import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultknowledgeComponent } from './resultknowledge.component';

const routes: Routes = [
  {
    path: '',
    component: ResultknowledgeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
