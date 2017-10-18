import { Component, OnInit } from '@angular/core';
import { CarOwnerDataService } from './car-owner-data.service';
import { CarOwner } from './car-owner';

@Component({
  selector: 'car-owners',
  templateUrl: './car-owners.component.html',
  styleUrls: ['./car-owners.component.css'],
  providers: []
})
export class CarOwnersComponent implements OnInit{

  carReg: string = "";
  carOwners: CarOwner[] = []
  carOwnersOrig: CarOwner[] = []
  updateCarOwner: CarOwner;
  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnInit() {
    this.updateCarOwnersArray();
  }

  updateCarOwnersArray(){
    this.carOwnerDataService
    .getAllCarOwners()
    .subscribe(
      (carOwners) => {
        this.carOwners = carOwners;
      }
    )
  }

  onDeleteCarOwner(_id: string) {
    console.log('DELETE: ' + _id)
    this.carOwnerDataService
    .deleteCarOwnerById(_id)
    .subscribe(
      (_) => {
        this.carOwners = this.carOwners.filter((co) => co._id !== _id)
      }
    )
  }

  onEditCarOwner(_id: string) {
    let carOwner = this.carOwners.filter((co) => co._id === _id).pop();
    this.updateCarOwner = Object.assign({}, carOwner);

    this.updateCarOwnersArray();
  }

  onSkypeAlertCarOwner(name: string) {
    this.carOwnerDataService
    .skypeAlert(name)
    .subscribe(
      (_) => {
        null
      }
    )
  }

  onAddCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .addCarOwner(carOwner)
      .subscribe(
        (_) => {
          this.updateCarOwnersArray();
        }
      );
  }

  onUpdateCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .updateCarOwner(carOwner)
      .subscribe(
        (_) => {
          this.updateCarOwnersArray();
        }
      );
  }

  onSearchCarReg() {
    //console.log(this.carReg)
    if(this.carReg !== ""){
      this.carOwnersOrig = this.carOwners;
      let carSearch = this.carOwners.filter((co) => co.carReg === this.carReg).pop();
      this.carOwners = [carSearch]
    }
    else if (this.carOwnersOrig !== []){
      this.carOwners = this.carOwnersOrig;
    }
    
  }

  onClearSearchCarReg(){
    this.carOwners = this.carOwnersOrig;
    //Clear input
    this.carReg = "";
  }


}
