import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any[] = [];
    Category:any;
  constructor(private service:ServiceService ,private router:Router,private location: Location ) { }

  ngOnInit() {
    this.getCategories();
    
  }
    goBack(): void {
    this.location.back();
  }
  
  getCategories(): any {
  
    this.service.get_categories().subscribe(
      (data) => { 
        this.categories = data ;
        console.log(this.categories)
      });
   }
   navigateToShops(categoryId: number): void {
    this.router.navigate(['/shops-by-cat', categoryId]);
  }
     
}
