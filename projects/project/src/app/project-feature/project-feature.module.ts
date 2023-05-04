import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFeatureRoutingModule } from './project-feature-routing.module';
import { postReducer } from "../../../../demo/src/Ngrx/state/reducer";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DemoModule } from "../../../../demo/src/lib/demo.module";
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
    ProjectFeatureRoutingModule,
    StoreModule.forRoot({data : postReducer}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    DemoModule,
    DemoModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ProjectFeatureModule {}
