import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { FormComponent } from './form/form.component';
import { DemoModule } from "../../../demo/src/lib/demo.module";

@NgModule({
    declarations: [AppComponent, TableComponent, FormComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        TableModule,
        DemoModule
    ]
})
export class AppModule {}
