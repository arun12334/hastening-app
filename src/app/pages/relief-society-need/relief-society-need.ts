import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';

interface NeedRequest {
  firstName: string;
  contactMethod: string;
  details: string;
  createdAt: number;
}

@Component({
  selector: 'app-relief-society-need',
  imports: [Header, FormsModule],
  templateUrl: './relief-society-need.html',
  styleUrl: './relief-society-need.scss'
})
export class ReliefSocietyNeed {
  request: NeedRequest = { firstName: '', contactMethod: '', details: '', createdAt: 0 };
  submitted = false;

  constructor(private router: Router) {}

  submit(): void {
    const requests = JSON.parse(localStorage.getItem('reliefSocietyNeeds') || '[]') as NeedRequest[];
    requests.push({ ...this.request, createdAt: Date.now() });
    localStorage.setItem('reliefSocietyNeeds', JSON.stringify(requests));
    this.submitted = true;
  }

  goBack(): void {
    this.router.navigate(['/sisters-in-zion']);
  }
}
