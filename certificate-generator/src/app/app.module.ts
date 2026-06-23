import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadExcelComponent } from './components/upload-excel/upload-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './components/student-list/student-list.component';
import { OfferLetterPreviewComponent } from './components/offer-letter-preview/offer-letter-preview.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadExcelComponent,
    StudentListComponent,
    OfferLetterPreviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
