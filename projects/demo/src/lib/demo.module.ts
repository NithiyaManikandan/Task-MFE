import { NgModule, isDevMode } from '@angular/core';
import { DemoComponent } from './demo.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'projects/demo/src/Ngrx/state/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    StoreModule.forRoot({data : postReducer}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
