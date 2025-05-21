import { Component, OnInit } from '@angular/core';
import { Space } from '../features/Space/models/space.model';
import { SpaceService } from '../features/Space/services/space.service';
import { SpaceCardMediumComponent } from "../../components/space-card-medium/space-card-medium.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { space } from 'postcss/lib/list';

@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [SpaceCardMediumComponent, CommonModule],
  templateUrl: './my-listings.component.html',
  styleUrl: './my-listings.component.scss'
})
export class MyListingsComponent implements OnInit{
  spaces: Space[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private spaceService: SpaceService, private router: Router) {}

  addNewSpace() {
    this.router.navigate(['/add-listing'])
  }

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces(): void {
    this.isLoading = true;
    this.spaceService.getAllSpaces().subscribe({
      next: (data) => {
        this.spaces = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load spaces. Please try again later.';
        this.isLoading = false;
        console.error('Error loading spaces:');
      }
    });
  }

  handleDelete(spaceId: string): void {
    if (confirm('Are you sure you want to delete this space?')) {
      this.spaceService.deleteSpace(spaceId).subscribe({
        next: () => {
          this.spaces = this.spaces.filter(space => space.id !== spaceId);
        },
        error: () => {
          console.error('Error deleting space:');
          this.error = 'Failed to delete space. Please try again.';
        }
      });
    }
  }

  handleEdit(spaceId: string): void {
    console.log('Edit space with ID:', spaceId);
    this.router.navigate(['/edit-space', spaceId]);
  }
}


