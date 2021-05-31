import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicdriverComponent } from './basicdriver.component';

const routes: Routes = [
  {
    path: '',
    component: BasicdriverComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
