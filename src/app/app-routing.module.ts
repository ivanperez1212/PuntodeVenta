import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
       path:'dashboard',
       loadChildren: () => import('./pages/dashboard/dashboard.module').then(m =>m.DashboardModule)
      },
      {
        path:'list-Producto',
        loadChildren: () => import('./pages/list-product/list-product.module').then(m => m.ListProductModule)
      },
      {
        path:'summary-day',
        loadChildren: () => import('./pages/summary-day/summary-day.module').then(m => m.SummaryDayModule)
      },
      {
        path:'update-product/:id',
        loadChildren: () => import('./pages/update-product/update-product.module').then(m => m.UpdateProductModule)
      },
      {
       path:'insert-product',
       loadChildren: () => import('./pages/insert-product/insert-product.module').then(m =>m.InsertProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
