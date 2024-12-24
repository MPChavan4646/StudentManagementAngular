import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  providers:[ApiService],
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students$;
  courses$;
  showModal = false;
  modalData: any = null;

  constructor(private apiService: ApiService) {
     this.students$= this.apiService.students$;
     this.courses$ = this.apiService.courses$;
  }

  openModal() {
    this.modalData = { studentName: '', studentAge: null, course: [] };
    this.showModal = true;
  }

  editStudent(student: any) {
    this.modalData = { ...student, course: [...(student.course || [])] };
    this.showModal = true;
  }

  deleteStudent(id: number) {
    this.apiService.deleteStudent(id);
  }

  saveStudent(student: any) {
    if (student.id) {
      this.apiService.updateStudent(student.studentId, student);
    } else {
      this.apiService.addStudent(student);
    }
    this.showModal = false;
  }
}
