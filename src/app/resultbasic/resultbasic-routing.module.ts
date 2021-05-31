import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultbasicComponent } from './resultbasic.component';

const routes: Routes = [
  {
    path: '',
    component: ResultbasicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
