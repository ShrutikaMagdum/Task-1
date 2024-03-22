import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductComponent } from "./product/product.component";
import { DialogComponent } from "./dialog/dialog.component";
import { HttpService } from "./shared/services/http-data.service";
 
@NgModule({
    declarations:[
        AppComponent,
        NavbarComponent,
        DialogComponent,
        ProductComponent 
    ],
    imports : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatDialogContent,
        MatDialogTitle
        
    ],
    providers: [
        HttpService,
        provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}

