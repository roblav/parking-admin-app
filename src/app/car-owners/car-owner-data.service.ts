import { Injectable } from '@angular/core';
import { CarOwner } from './car-owner'
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarOwnerDataService {

  //Placeholder for CarOwner's
  carOwners: CarOwner[] = [];

  constructor(private api: ApiService) {  }

  // Simulate GET /carowners
  getAllCarOwners(): Observable<CarOwner[]> {
    return this.api.getAllCarOwners();
  }

  // Simulate POST /carowners
  addCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    return this.api.createCarOwner(carOwner);
  } 
  
  // Simulate PUT /carowners
  updateCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    return this.api.updateCarOwner(carOwner);
  }

  // Simulate GET /carowners/:email
  getCarOwnerById(id: number): Observable<CarOwner> {
    return this.api.getCarOwnerById(id);
  }

  deleteCarOwnerById(id: number): Observable<null> {
    return this.api.deleteCarOwnerById(id);
  }

}
