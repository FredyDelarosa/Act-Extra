import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-selector.component.html',
  styleUrl: './student-selector.component.scss'
})
export class StudentSelectorComponent {
  selectedPair: {student1: string, student2: string} | null = null;

  constructor(public studentService: StudentService) {}

  selectStudents() {
    this.selectedPair = this.studentService.selectRandomStudents();
  }
}
