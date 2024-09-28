import { Component } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-selector',
  standalone: true,
  imports: [],
  templateUrl: './student-selector.component.html',
  styleUrl: './student-selector.component.scss'
})
export class StudentSelectorComponent {
  selectedPair: {student1: string, student2: string} | null = null;

  constructor(public StudentService: StudentService) {}

  selectStudents() {
    this.selectedPair = this.StudentService.selectRandomStudents();
  }
}
