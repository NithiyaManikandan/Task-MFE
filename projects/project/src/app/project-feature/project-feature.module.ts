import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFeatureRoutingModule } from './project-feature-routing.module';
import { postReducer } from "../../../Ngrx/state/reducer";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectFeatureRoutingModule,
    StoreModule.forRoot({data : postReducer}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
})
export class ProjectFeatureModule {}
