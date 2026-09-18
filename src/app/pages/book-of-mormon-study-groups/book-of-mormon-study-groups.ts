import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeatureAccess } from '../../services/feature-access';
import { Header } from '../../components/header/header';

interface StudyGroup {
  id: number;
  name: string;
  leader: string;
  enrolled: number;
  format: string;
  email: string;
  phone: string;
  description?: string;
  requestStatus: 'available' | 'pending' | 'accepted' | 'full';
}

@Component({
  selector: 'app-book-of-mormon-study-groups',
  imports: [Header, FormsModule],
  templateUrl: './book-of-mormon-study-groups.html',
  styleUrl: './book-of-mormon-study-groups.scss'
})
export class BookOfMormonStudyGroups {
  private readonly featureAccess = inject(FeatureAccess);
  groups: StudyGroup[] = [
    { id: 1, name: 'Book of Mormon Beginnings', leader: 'Maria', enrolled: 12, format: 'Zoom', email: 'maria@example.com', phone: '+1 555 0100', requestStatus: 'available' },
    { id: 2, name: 'Come unto Christ', leader: 'Esther', enrolled: 8, format: 'In person', email: 'esther@example.com', phone: '+1 555 0101', requestStatus: 'available' },
    { id: 3, name: 'Faith in Every Chapter', leader: 'Rebecca', enrolled: 15, format: 'Hybrid', email: 'rebecca@example.com', phone: '+1 555 0102', requestStatus: 'available' },
    { id: 4, name: 'Morning Scripture Circle', leader: 'Naomi', enrolled: 19, format: 'WhatsApp', email: 'naomi@example.com', phone: '+1 555 0103', requestStatus: 'available' },
    { id: 5, name: 'Following the Savior', leader: 'Hannah', enrolled: 20, format: 'Zoom', email: 'hannah@example.com', phone: '+1 555 0104', requestStatus: 'full' }
  ];
  newGroupModalOpen = false;
  newGroup = { name: '', leader: '', email: '', phone: '', description: '' };

  constructor(private router: Router) {}
  requestToJoin(group: StudyGroup): void {
    if (!this.featureAccess.requireMember()) return;
    if (group.enrolled < 20 && group.requestStatus === 'available') {
      group.requestStatus = 'pending';
      this.groups = [...this.groups];
    }
  }

  openCreateGroupModal(): void {
    if (!this.featureAccess.requireMember()) return;
    this.newGroupModalOpen = true;
  }

  closeCreateGroupModal(): void {
    this.newGroupModalOpen = false;
  }

  createGroup(): void {
    if (!this.featureAccess.requireMember()) return;
    if (!this.newGroup.name || !this.newGroup.leader || !this.newGroup.email || !this.newGroup.phone || this.newGroup.description.split(/\s+/).filter(Boolean).length > 100) return;
    this.groups = [...this.groups, {
      id: Date.now(),
      ...this.newGroup,
      enrolled: 1,
      format: 'To be arranged',
      requestStatus: 'accepted'
    }];
    this.newGroup = { name: '', leader: '', email: '', phone: '', description: '' };
    this.newGroupModalOpen = false;
  }
  goBack(): void { this.router.navigate(['/sisters-in-zion']); }
}
