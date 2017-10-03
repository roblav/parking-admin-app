import { Component, OnInit } from '@angular/core';

import { CarOwnerDataService } from '../car-owner-data.service';
import { CarOwner } from '../car-owner';

@Component({
  selector: 'car-owner-list',
  templateUrl: './car-owner-list.component.html',
  styleUrls: ['./car-owner-list.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnerListComponent implements OnInit {

  carOwners: CarOwner[] = []

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnInit() {
    this.carOwnerDataService
    .getAllCarOwners()
    .subscribe(
      (carOwners) => {
        this.carOwners = carOwners;
      }
    )
  }

  editCarOwner(id){
    console.log('EDIT: ' + id)
  }

  deleteCarOwner(id){
    console.log('DELETE: ' + id)
    this.carOwnerDataService
    .deleteCarOwnerById(id)
    .subscribe(
      (_) => {
        this.carOwners = this.carOwners.filter((co) => co.id !== id)
      }
    )
  }

}
