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

  // Simulate GET /carowners/:email
  getCarOwnerByEmail(email: string): CarOwner {
    return this.carOwners
      .filter(carOwner => carOwner.email === email)
      .pop();
  }

}
