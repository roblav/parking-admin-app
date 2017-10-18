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
  addCarOwner(carOwner: CarOwner): Observable<null> {
    return this.api.createCarOwner(carOwner);
  }

  // Simulate GET /carowners/:_id
  getCarOwnerById(_id: string): Observable<CarOwner> {
    return this.api.getCarOwnerById(_id);
  }

  // Simulate PUT /carowners
  updateCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    return this.api.updateCarOwner(carOwner);
  }

  deleteCarOwnerById(_id: string): Observable<null> {
    return this.api.deleteCarOwnerById(_id);
  }

  skypeAlert(name: string): Observable<null> {
    return this.api.skypeAlert(name)
  }

}
