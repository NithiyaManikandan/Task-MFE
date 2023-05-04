import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFeatureRoutingModule } from './employee-feature-routing.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'projects/demo/src/Ngrx/state/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, ' ../../assets/i18n/', '.json');
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeFeatureRoutingModule,
    StoreModule.forRoot({ data: postReducer }),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class EmployeeFeatureModule {}
