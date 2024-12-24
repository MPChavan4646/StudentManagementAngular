
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrl: './course-modal.component.scss'
})
export class CourseModalComponent {
  @Input() data: any = { courseName: '' };
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  saveChanges() {
    this.save.emit(this.data);
  }

  closeModal() {
    this.close.emit();
  }

}
