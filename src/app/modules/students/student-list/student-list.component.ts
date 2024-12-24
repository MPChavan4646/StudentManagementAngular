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
  students=[{"studentId":1,"studentName":"Alice Johnson","studentAge":25,"course":[{"courseId":1,"courseName":"B.Tech"},{"courseId":2,"courseName":"MCA"}]},{"studentId":2,"studentName":"Bob Smith","studentAge":20,"course":[{"courseId":1,"courseName":"B.Tech"},{"courseId":3,"courseName":"BBA"}]},{"studentId":3,"studentName":"Carol Davis","studentAge":30,"course":[{"courseId":2,"courseName":"MCA"}]},{"studentId":4,"studentName":"David Wilson","studentAge":40,"course":[{"courseId":3,"courseName":"BBA"}]},{"studentId":5,"studentName":"Eve Brown","studentAge":25,"course":[{"courseId":1,"courseName":"B.Tech"}]},{"studentId":6,"studentName":"Frank Miller","studentAge":28,"course":[{"courseId":2,"courseName":"MCA"}]},{"studentId":7,"studentName":"Grace Taylor","studentAge":26,"course":[{"courseId":2,"courseName":"MCA"},{"courseId":3,"courseName":"BBA"}]},{"studentId":8,"studentName":"Henry And","studentAge":22,"course":[{"courseId":1,"courseName":"B.Tech"}]},{"studentId":9,"studentName":"Ivy Thomas","studentAge":23,"course":[{"courseId":2,"courseName":"MCA"},{"courseId":3,"courseName":"BBA"}]},{"studentId":10,"studentName":"Jack White","studentAge":21,"course":[{"courseId":1,"courseName":"B.Tech"},{"courseId":3,"courseName":"BBA"}]}]
  courses=[{"courseId":1,"courseName":"B.Tech"},{"courseId":2,"courseName":"MCA"},{"courseId":3,"courseName":"BBA"}]
  showModal = false;
  modalData: any = null;

  constructor(private apiService: ApiService) {
    // this.students$= this.apiService.students$;
    // this.courses$ = this.apiService.courses$;
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
