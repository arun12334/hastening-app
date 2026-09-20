import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';

interface DiscipleMessage {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  location?: string;
}

@Component({
  selector: 'app-messages-disciples-all-storys',
  imports: [Header],
  templateUrl: './messages-disciples-all-storys.html',
  styleUrl: './messages-disciples-all-storys.scss'
})
export class MessagesDisciplesAllStorys {
  private readonly router = inject(Router);

  readonly defaultMessages: DiscipleMessage[] = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      title: 'Finding Peace Through Faith',
      description: 'Faith gives strength during difficult moments.',
      time: '2h ago'
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      title: 'A Changed Heart',
      description: 'Forgiveness through Jesus Christ changes lives.',
      time: '1d ago'
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      title: 'Hope In Christ',
      description: 'His grace brings hope every day.',
      time: '2d ago'
    },
    {
      id: 4,
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      title: 'Serving Others',
      description: 'Serving people is serving the Lord.',
      time: '3d ago'
    }
  ];

  readonly messages: DiscipleMessage[] = this.loadMessages();

  private loadMessages(): DiscipleMessage[] {
    const stored = localStorage.getItem('approvedDiscipleMessages');
    if (!stored) {
      return [...this.defaultMessages];
    }

    try {
      const approved = JSON.parse(stored) as Array<{
        title: string;
        message: string;
        location?: string;
        submittedAt?: string;
      }>;
      return [
        ...this.defaultMessages,
        ...approved.map((message, index) => ({
          id: 1000 + index,
          image: 'assets/sharing/sharing-our-faith-banner122.png',
          title: message.title,
          description: message.message,
          time: message.submittedAt ? 'Recently' : 'Shared recently',
          location: message.location
        }))
      ];
    } catch (error) {
      console.error('[Disciples] Unable to load approved messages:', error);
      return [...this.defaultMessages];
    }
  }

  goBack(): void {
    this.router.navigate(['/sharing-our-faith']);
  }
}
