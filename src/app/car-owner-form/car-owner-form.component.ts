import { Component, OnInit } from '@angular/core';

import { CarOwnerDataService } from '../car-owner-data.service';
import { CarOwner } from '../car-owner';

@Component({
  selector: 'car-owner-form',
  templateUrl: './car-owner-form.component.html',
  styleUrls: ['./car-owner-form.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnerFormComponent implements OnInit {

  model = new CarOwner();

  carOwners: CarOwner[] = []

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnInit() {
    this.carOwners = this.carOwnerDataService.getAllCarOwners();
  }

  get currentCarOwner() { return JSON.stringify(this.model)}

  addCarOwner(){
    this.carOwnerDataService.addCarOwner(this.model);
    this.model = new CarOwner();
  }

}
