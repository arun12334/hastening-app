import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { FeatureAccess } from '../../services/feature-access';

interface Story {
  id: number;
  image: string;
  title: string;
  author?: string;
  date: string;
  time?: string;
  description: string;
  status: string;
  badge: string;
}

@Component({
  selector: 'app-sharing-a-story-of-love-view-all-story',
  imports: [Header, FormsModule],
  templateUrl: './sharing-a-story-of-love-view-all-story.html',
  styleUrl: './sharing-a-story-of-love-view-all-story.scss',
})
export class SharingAStoryOfLoveViewAllStory implements OnInit {
  private readonly featureAccess = inject(FeatureAccess);
  private readonly savedStoriesKey = 'sharing_a_story_of_love_saved_stories';
  private readonly viewAllStoriesKey = 'sharing_a_story_of_love_view_all_stories';

  readonly defaultStories: Story[] = [
    {
      id: 1,
      image: 'assets/loving/sharing-a-story-of-love-search-stories.png',
      title: 'A Simple Meal, A Grateful Heart',
      description: 'We delivered meals to a family in need. Their gratitude touched our hearts.',
      status: 'True',
      badge: 'success',
      date: 'May 12, 2024'
    },
    {
      id: 2,
      image: 'assets/loving/sharingastory-2.png',
      title: 'Planting Hope in the Community',
      description: 'Neighbors gathered together for a service project.',
      status: 'True',
      badge: 'success',
      date: 'May 5, 2024'
    },
    {
      id: 3,
      image: 'assets/loving/sharingastory-3.png',
      title: 'Blessings from Our Chicken Coop',
      description: 'Sharing eggs brought smiles to nearby families.',
      status: 'Story Only',
      badge: 'warning',
      date: 'Apr 28, 2024'
    },
    {
      id: 4,
      image: 'assets/loving/sharingastory-4.png',
      title: 'Learning Together',
      description: 'Studying scriptures strengthened our friendships.',
      status: 'True',
      badge: 'success',
      date: 'Apr 15, 2024'
    },
    {
      id: 5,
      image: 'assets/loving/sharingastory-5.png',
      title: 'Small Acts, Big Impact',
      description: 'Simple kindness changed someones day.',
      status: 'Story Only',
      badge: 'warning',
      date: 'Apr 2, 2024'
    }
  ];

  allStories: Story[] = [];
  selectedStory: Story | null = null;
  showStoryModal = false;
  showEditModal = false;
  editStoryData: Story = this.createEmptyStory();

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedAllStories = localStorage.getItem(this.viewAllStoriesKey);
    const savedStories = localStorage.getItem(this.savedStoriesKey);
    const userStories: Story[] = savedStories ? JSON.parse(savedStories) : [];
    this.allStories = storedAllStories
      ? JSON.parse(storedAllStories)
      : [...this.defaultStories, ...userStories];
  }

  selectStory(story: Story): void {
    this.selectedStory = story;
    this.showStoryModal = true;
  }

  closeStoryModal(): void {
    this.showStoryModal = false;
    this.selectedStory = null;
  }

  editStory(story: Story, event: Event): void {
    if (!this.featureAccess.requireMember()) return;
    event.stopPropagation();
    this.editStoryData = { ...story };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  saveEditedStory(): void {
    if (!this.featureAccess.requireMember()) return;
    this.validateEditDescriptionLength();

    const updatedStory = {
      ...this.editStoryData,
      title: this.editStoryData.title.trim(),
      description: this.editStoryData.description.trim(),
      author: this.editStoryData.author?.trim() || 'Community Member',
      badge: this.editStoryData.status === 'True' ? 'success' : 'warning'
    };

    this.allStories = this.allStories.map(story =>
      story.id === updatedStory.id ? updatedStory : story
    );
    this.persistStories();
    this.selectedStory = updatedStory;
    this.showEditModal = false;
  }

  validateEditDescriptionLength(): void {
    const maxDescriptionLength = 1500;

    if (this.editStoryData.description.length > maxDescriptionLength) {
      this.editStoryData.description = this.editStoryData.description.slice(0, maxDescriptionLength);
      window.alert('Description cannot exceed 1500 characters.');
    }
  }

  deleteStory(story: Story, event: Event): void {
    if (!this.featureAccess.requireMember()) return;

    event.stopPropagation();

    if (!window.confirm(`Delete "${story.title}"?`)) {
      return;
    }

    this.allStories = this.allStories.filter(item => item.id !== story.id);
    this.persistStories();

    if (this.selectedStory?.id === story.id) {
      this.closeStoryModal();
    }
  }

  onEditImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.editStoryData.image = typeof reader.result === 'string' ? reader.result : this.editStoryData.image;
    };
    reader.readAsDataURL(file);
  }

  private persistStories(): void {
    localStorage.setItem(this.viewAllStoriesKey, JSON.stringify(this.allStories));
  }

  private createEmptyStory(): Story {
    return {
      id: 0,
      image: '',
      title: '',
      date: '',
      description: '',
      status: 'Story Only',
      badge: 'warning'
    };
  }

  goBack(): void {
    this.router.navigate(['/sharing-a-story-of-love']);
  }
}
