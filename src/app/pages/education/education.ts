import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
}
