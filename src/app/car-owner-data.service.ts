import { Injectable } from '@angular/core';
import { CarOwner } from './car-owner'

@Injectable()
export class CarOwnerDataService {

  //Placeholder for CarOwner's
  carOwners: CarOwner[] = [
    { name: 'Rob Lavender', carReg: 'LY07 EBA', email: 'rob@gamil.com', skypeId: 'roblav'},
    { name: 'Tom Jones', carReg: 'ZZ14 HGH', email: 'tom@gamil.com', skypeId: 'tomjones'},
      {
        "name": "Cathleen Atkins",
        "carReg": "OT05 XQB",
        "email": "cathleenatkins@limozen.com",
        "skypeId": "RandiBishop0"
      },
      {
        "name": "Lorna Carroll",
        "carReg": "TI05 OVW",
        "email": "lornacarroll@limozen.com",
        "skypeId": "BoyleMoon1"
      },
      {
        "name": "Lydia Malone",
        "carReg": "LH05 QWK",
        "email": "lydiamalone@limozen.com",
        "skypeId": "ConnieMercer2"
      },
      {
        "name": "Cobb Faulkner",
        "carReg": "PO05 EOI",
        "email": "cobbfaulkner@limozen.com",
        "skypeId": "DoreenHorne3"
      },
      {
        "name": "Guy Day",
        "carReg": "AE05 BJR",
        "email": "guyday@limozen.com",
        "skypeId": "RobinHarper4"
      },
      {
        "name": "Liz Downs",
        "carReg": "PP05 CUB",
        "email": "lizdowns@limozen.com",
        "skypeId": "LucileDrake5"
      }
  ];

  constructor() { }

  // Simulate POST /carowners
  addCarOwner(carOwner: CarOwner): CarOwnerDataService {
    this.carOwners.push(carOwner);
    return this;
  }

  // Simulate GET /carowners
  getAllCarOwners(): CarOwner[] {
    return this.carOwners;
  }

  // Simulate GET /carowners/:email
  getCarOwnerByEmail(email: string): CarOwner {
    return this.carOwners
      .filter(carOwner => carOwner.email === email)
      .pop();
  }

}
