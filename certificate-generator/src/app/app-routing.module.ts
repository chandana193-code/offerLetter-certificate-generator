import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadExcelComponent } from './components/upload-excel/upload-excel.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { OfferLetterPreviewComponent } from './components/offer-letter-preview/offer-letter-preview.component';


const routes: Routes = [

   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  }, 

  {
    path: 'upload',
    component: UploadExcelComponent
  },

  {
    path: 'students',
    component: StudentListComponent
  },

  {
    path: 'offer-letter',
    component: OfferLetterPreviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
