import { Routes } from '@angular/router';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', loadComponent: () => import('./modules/students/student-list/student-list.component').then(
        (m) => m.StudentListComponent
      ), 
      providers: [ApiService, importProvidersFrom(HttpClientModule)]},
    { path: 'courses', loadComponent: () => import('./modules/courses/course-list/course-list.component').then(
        (m) => m.CourseListComponent
      ) ,
      providers: [ApiService, importProvidersFrom(HttpClientModule)]}
  ];