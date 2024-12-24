import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  // State for Students
  private studentsSubject = new BehaviorSubject<any[]>([]);
  students$ = this.studentsSubject.asObservable();

  // State for Courses
  private coursesSubject = new BehaviorSubject<any[]>([]);
  courses$ = this.coursesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadStudents();
    this.loadCourses();
  }

  // Student API
  loadStudents() {
    this.http.get<any[]>(`${this.baseUrl}/students`).subscribe((data) => {
      this.studentsSubject.next(data);
    });
  }

  addStudent(student: any) {
    return this.http.post(`${this.baseUrl}/students`, student).subscribe(() => {
      this.loadStudents();
    });
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.baseUrl}/students/${id}`, student).subscribe(() => {
      this.loadStudents();
    });
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/students/${id}`).subscribe(() => {
      this.loadStudents();
    });
  }

  // Course API
  loadCourses() {
    this.http.get<any[]>(`${this.baseUrl}/courses`).subscribe((data) => {
      this.coursesSubject.next(data);
    });
  }

  addCourse(course: any) {
    return this.http.post(`${this.baseUrl}/courses`, course).subscribe(() => {
      this.loadCourses();
    });
  }

  updateCourse(id: number, course: any) {
    return this.http.put(`${this.baseUrl}/courses/${id}`, course).subscribe(() => {
      this.loadCourses();
    });
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.baseUrl}/courses/${id}`).subscribe(() => {
      this.loadCourses();
    });
  }
}
