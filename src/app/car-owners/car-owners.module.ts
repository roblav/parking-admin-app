import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service'

import { CarOwnerDataService } from './car-owner-data.service';
import { CarOwner } from './car-owner';

import { CarOwnerFormComponent } from './car-owner-form/car-owner-form.component';
import { CarOwnerListComponent } from './car-owner-list/car-owner-list.component';
import { CarOwnersComponent } from './car-owners.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CarOwnerListComponent,
    CarOwnerFormComponent,
    CarOwnersComponent
  ],
  exports: [
    CarOwnerListComponent,
    CarOwnerFormComponent,
    CarOwnersComponent
  ],
  providers: [CarOwnerDataService, ApiService]
})
export class CarOwnersModule { }
