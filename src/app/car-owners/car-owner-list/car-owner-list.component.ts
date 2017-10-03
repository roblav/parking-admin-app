import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CarOwnerDataService } from '../car-owner-data.service';
import { CarOwner } from '../car-owner';

@Component({
  selector: 'car-owner-list',
  templateUrl: './car-owner-list.component.html',
  styleUrls: ['./car-owner-list.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnerListComponent implements OnInit{

  @Input() carOwners: CarOwner[] = []

  @Output() delete: EventEmitter<CarOwner> = new EventEmitter()
  @Output() edit: EventEmitter<CarOwner> = new EventEmitter()

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnInit() {
  }

  editCarOwner(id){
    this.edit.emit(id)
  }

  deleteCarOwner(id){ this.delete.emit(id) }

}
