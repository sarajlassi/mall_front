import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  shops: any[] = [];
  searchInput: string = '';
  allShops:any[] = [];


  constructor(private service: ServiceService,private route: ActivatedRoute,private location: Location, private dialog: MatDialog) {}
  ngOnInit() {
    this.getShops();
    this.allShops = this.shops;

  }
  getShops(): any {
    this.service.get_shops().subscribe((data) => {
      this.shops = data;
      this.allShops = data;

    });
  
  }
  
  searchProducts(): void {
    this.shops = this.allShops.filter(shops =>
      shops.nameShop.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  goBack(): void {
    this.location.back();
  }
  showImageOnClick(imageUrl: string): void {
    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container' 
    });
  }
  
  
}
