import { Component } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-selected-pairs',
  standalone: true,
  imports: [],
  templateUrl: './selected-pairs.component.html',
  styleUrl: './selected-pairs.component.scss'
})
export class SelectedPairsComponent {
  constructor(public studentService: StudentService) {}
}
