import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
  firstName: string = 'Angular';
  angularVersion = 'Version 18';
  angularVersionNumber = 18;
  isActive: boolean = true;
  currentDateTime:Date= new Date();
  inputType: string = 'checkbox';
}
