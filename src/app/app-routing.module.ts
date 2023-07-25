import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FiltreComponent } from './filtre/filtre.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ReductionComponent } from './reduction/reduction.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsByCatComponent } from './shops-by-cat/shops-by-cat.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'reduction', component: ReductionComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'shops-by-cat/:categoryId', component: ShopsByCatComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
