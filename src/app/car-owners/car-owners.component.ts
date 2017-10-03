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

  carOwners: CarOwner[] = []
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

  onDeleteCarOwner(id: number) {
    console.log('DELETE: ' + id)
    this.carOwnerDataService
    .deleteCarOwnerById(id)
    .subscribe(
      (_) => {
        this.carOwners = this.carOwners.filter((co) => co.id !== id)
      }
    )
  }

  onEditCarOwner(id: number) {
    let carOwner = this.carOwners.filter((co) => co.id === id).pop();
    this.updateCarOwner = Object.assign({}, carOwner);

    this.updateCarOwnersArray();
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


}
