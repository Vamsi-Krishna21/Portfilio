import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
