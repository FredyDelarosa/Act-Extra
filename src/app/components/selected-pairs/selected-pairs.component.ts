import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-selected-pairs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-pairs.component.html',
  styleUrls: ['./selected-pairs.component.scss']
})
export class SelectedPairsComponent {
  constructor(public studentService: StudentService) {}
}
