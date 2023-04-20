import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFeatureRoutingModule } from './project-feature-routing.module';
import { postReducer } from "../../../../demo/src/Ngrx/state/reducer";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DemoModule } from "../../../../demo/src/lib/demo.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectFeatureRoutingModule,
    StoreModule.forRoot({data : postReducer}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    DemoModule
  ],
})
export class ProjectFeatureModule {}
