import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
  
@Component({
  selector: 'app-reduction',
  templateUrl: './reduction.component.html',
  styleUrls: ['./reduction.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ReductionComponent {
  reduction: any[] = [
];
  allReductions: any[] = [];
  searchInput: string = '';

  constructor(private service: ServiceService,private location: Location, private dialog: MatDialog) {}

  ngOnInit() {
    this.getReduction();
    this.allReductions=this.reduction
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
  getReduction(): void {
    this.service.get_reduction().subscribe(
      (data) => { 
        this.reduction = data ;
        this.allReductions = data; 
        console.log(this.reduction);
      }
    );
  }
  

  searchReduction(): void {
    this.reduction = this.allReductions.filter(reduction =>
      reduction.nameReduction.toLowerCase().includes(this.searchInput.toLowerCase()) ||
      reduction.pourcentage.toString().includes(this.searchInput.toLowerCase())
    );console.log(this.searchInput)
  }
   
}
