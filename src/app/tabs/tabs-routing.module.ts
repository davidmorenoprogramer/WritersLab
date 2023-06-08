import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'nuevo',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tuslibros',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      
      {
        path: 'configuracion',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        
      },
     
     
      {
        path: '',
        redirectTo: '/nuevo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nuevo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
