import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { CarOwnerDataService } from '../car-owner-data.service';
import { CarOwner } from '../car-owner';

@Component({
  selector: 'car-owner-form',
  templateUrl: './car-owner-form.component.html',
  styleUrls: ['./car-owner-form.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnerFormComponent implements OnInit, OnChanges {

  model: CarOwner;
  editCarOwner: boolean = false;

  @Input() updateCarOwner: CarOwner;

  @Output() add: EventEmitter<CarOwner> = new EventEmitter();
  @Output() update: EventEmitter<CarOwner> = new EventEmitter();

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnChanges() {
    if(this.updateCarOwner !== undefined){
      this.model = this.updateCarOwner
      this.editCarOwner = true
    }
  }
  ngOnInit() {
    this.model = new CarOwner()
  }

  get currentCarOwner() { return JSON.stringify(this.model)}

  
  onSubmit() {
    if(this.editCarOwner) {
      this.editedCarOwner()
    } else {
      this.addCarOwner();
    }
  }

  addCarOwner() {
    this.add.emit(this.model);
    this.model = new CarOwner();
  }

  editedCarOwner() {
    this.update.emit(this.model);
    this.model = new CarOwner();
    this.editCarOwner = false;
  }

}
