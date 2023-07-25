import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FiltreComponent } from './filtre/filtre.component';
import { ProductsComponent } from './products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';
import { CategoryComponent } from './category/category.component';
import { ShopsComponent } from './shops/shops.component';
import { ReductionComponent } from './reduction/reduction.component';
import { ShopsByCatComponent } from './shops-by-cat/shops-by-cat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImagePopupComponent } from './image-popup/image-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FiltreComponent,
    ProductsComponent,
    VirtualKeyboardComponent,
    CategoryComponent,
    ShopsComponent,
    ReductionComponent,
    ShopsByCatComponent,
    ImagePopupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
