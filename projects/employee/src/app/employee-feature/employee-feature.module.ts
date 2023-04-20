import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFeatureRoutingModule } from './employee-feature-routing.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'projects/demo/src/Ngrx/state/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeFeatureRoutingModule,
    StoreModule.forRoot({ data: postReducer }),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
})
export class EmployeeFeatureModule {}
