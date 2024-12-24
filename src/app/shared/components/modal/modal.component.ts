import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() data: any = { studentName: '' };
  @Input() courses: any= []; 
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  saveChanges() {
    this.save.emit(this.data);
  }

  closeModal() {
    this.close.emit();
  }
  toggleCourse(courseId: number) {
    if (!this.data.course) {
      this.data.course = [];
    }
    const index = this.data.course.indexOf(courseId);
    if (index > -1) {
      this.data.course.splice(index, 1); // Remove course if already selected
    } else {
      this.data.course.push(courseId); // Add course if not selected
    }
  }

  isCourseSelected(courseId: number): boolean {
    return this.data.course?.includes(courseId) ?? false;
  }

}
