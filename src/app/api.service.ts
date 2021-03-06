import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CarOwner } from './car-owners/car-owner'

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // API: GET /car-owners
  public getAllCarOwners(): Observable<CarOwner[]> {
    //this.http.get()
    return this.http
      .get(API_URL + '/car-owners')
      .map(response => {
        const carOwners = response.json();
        return carOwners.map((carOwner) => new CarOwner(carOwner));
      })
      .catch(this.handleError)
  }

  // API: POST /car-owners
  public createCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    //this.http.post()
    return this.http
      .post(API_URL + '/car-owners', carOwner)
      .map(response => null)
      /*{
        //console.log(response.json());
        return new CarOwner(response.json())
      })*/
      .catch(this.handleError);
  }

  // API: GET /car-owners/:id
  public getCarOwnerById(_id: string): Observable<CarOwner> {
    //this.http.get()
    return this.http
      .get(API_URL + '/car-owners/' + _id)
      .map(response => {
        return new CarOwner(response.json())
      })
      .catch(this.handleError);
  }

  // API: PUT /car-owners/:id
  public updateCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    //this.http.put()
    return this.http
      .put(API_URL + '/car-owners/' + carOwner._id, carOwner)
      .map(response => {
        return new CarOwner(response.json());
      })
      .catch(this.handleError);
  }

  // API: DELETE /car-owners/:id
  public deleteCarOwnerById(_id: string): Observable<null> {
    // this.http.delete()
    return this.http
      .delete(API_URL + '/car-owners/' + _id)
      .map(response => null)
      .catch(this.handleError);
  }

  // API: DELETE /car-owners/:id
  public skypeAlert(userName: string): Observable<null> {
    // this.http.delete()
    let skypeDetails = {
      "name" : userName
    }
    return this.http
      .post(API_URL + '/car-owners/skype-display-name', skypeDetails)
      .map(response => null)
      .catch(this.handleError);
  }
  

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
