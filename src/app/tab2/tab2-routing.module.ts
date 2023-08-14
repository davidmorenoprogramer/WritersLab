import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ChapterListComponent } from '../component/chapter-list/chapter-list.component';
import { PagesComponent } from '../component/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tab2.module').then(m => m.Tab2PageModule)
    component: Tab2Page,
  },
  {

    path: ':idBook',
    component: ChapterListComponent,
  },
  {


    path: ':idBook/:idChapter',
    component: PagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
