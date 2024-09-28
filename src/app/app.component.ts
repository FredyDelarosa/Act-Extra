import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentSelectorComponent } from "./components/student-selector/student-selector.component";
import { SelectedPairsComponent } from "./components/selected-pairs/selected-pairs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentSelectorComponent, SelectedPairsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Act-Extra';
}
