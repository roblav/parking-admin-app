import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarOwnerDataService } from './car-owner-data.service';
import { CarOwner } from './car-owner';

import { CarOwnerFormComponent } from './car-owner-form/car-owner-form.component';
import { CarOwnerListComponent } from './car-owner-list/car-owner-list.component';
import { CarOwnersComponent } from './car-owners.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
  providers: [CarOwnerDataService]
})
export class CarOwnersModule { }
