import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'basicdriver',
    loadChildren: () => import('./basicdriver/basicdriver.module').then( m => m.BasicdriverModule)
  },
  {
    path: 'knowledge',
    loadChildren: () => import('./knowledge/knowledge.module').then( m => m.KnowledgeModule)
  },{
    path: 'resultbasic',
    loadChildren: () => import('./resultbasic/resultbasic.module').then( m => m.ResultbasicModule)
  },{
    path: 'resultknowledge',
    loadChildren: () => import('./resultknowledge/resultknowledge.module').then( m => m.ResultknowledgeModule)
  },{
    path: 'resultexam',
    loadChildren: () => import('./resultexam/resultexam.module').then( m => m.ResultexamModule)
  },
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
