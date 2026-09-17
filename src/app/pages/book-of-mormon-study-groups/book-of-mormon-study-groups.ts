import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeatureAccess } from '../../services/feature-access';
import { Header } from '../../components/header/header';

interface StudyGroup { id: number; name: string; leader: string; enrolled: number; format: string; email: string; phone: string; description?: string; }

@Component({
  selector: 'app-book-of-mormon-study-groups',
  imports: [Header, FormsModule],
  templateUrl: './book-of-mormon-study-groups.html',
  styleUrl: './book-of-mormon-study-groups.scss'
})
export class BookOfMormonStudyGroups {
  private readonly featureAccess = inject(FeatureAccess);
  groups: StudyGroup[] = [
    { id: 1, name: 'Book of Mormon Beginnings', leader: 'Maria', enrolled: 12, format: 'Zoom', email: 'maria@example.com', phone: '+1 555 0100' },
    { id: 2, name: 'Come unto Christ', leader: 'Esther', enrolled: 20, format: 'In person', email: 'esther@example.com', phone: '+1 555 0101' }
  ];
  selectedGroup: StudyGroup | null = null;
  newGroup = { name: '', leader: '', email: '', phone: '', description: '' };
  joined = false;

  constructor(private router: Router) {}
  selectGroup(group: StudyGroup): void { this.selectedGroup = group; this.joined = false; }
  joinGroup(): void {
    if (!this.featureAccess.requireMember()) return;
    if (this.selectedGroup && this.selectedGroup.enrolled < 20) this.joined = true;
  }
  createGroup(): void {
    if (!this.featureAccess.requireMember()) return;
    if (!this.newGroup.name || !this.newGroup.leader || !this.newGroup.email || !this.newGroup.phone || this.newGroup.description.split(/\s+/).filter(Boolean).length > 100) return;
    this.groups = [...this.groups, { id: Date.now(), ...this.newGroup, enrolled: 1, format: 'To be arranged' }];
    this.newGroup = { name: '', leader: '', email: '', phone: '', description: '' };
  }
  goBack(): void { this.router.navigate(['/sisters-in-zion']); }
}
