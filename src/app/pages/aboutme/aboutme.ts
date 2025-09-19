import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css'
})
export class Aboutme {
  constructor(private router: Router) {}

  goToExperience() {
    this.router.navigate(['/experiencia']);
  }
}
