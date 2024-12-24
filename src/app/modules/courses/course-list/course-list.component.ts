import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseModalComponent } from '../../../shared/components/course-modal/course-modal.component';

@Component({
  standalone: true,
  imports: [CourseModalComponent, RouterModule,CommonModule],
  providers:[ApiService],
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses$;
  showModal = false;
  modalData: any = null;

  constructor(private apiService: ApiService) {
     this.courses = this.apiService.courses$;
  }

  openModal() {
    this.modalData =  { courseName: ''};
    this.showModal = true;
  }

  editCourse(course: any) {
    this.modalData = { ...course};
    this.showModal = true;
  }

  deleteCourse(id: number) {
    this.apiService.deleteCourse(id);
  }

  saveCourse(course: any) {
    if (course.id) {
      this.apiService.updateCourse(course.courseId, course);
    } else {
      this.apiService.addCourse(course);
    }
    this.showModal = false;
  }
}
