import { Component, OnInit } from '@angular/core';
import { UpdateSpace, UpdateSpaceRequest } from '../models/update-space.model';
import { Space, SpaceImage } from '../models/space.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceService } from '../services/space.service';
import { ImageUploadService } from '../services/image-upload.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-space',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-space.component.html',
  styleUrl: './update-space.component.scss'
})
export class UpdateSpaceComponent implements OnInit {
  spaceId: string;
  space: Space;
  spaceImages: SpaceImage[] = [];
  selectedFiles: { file: File, title: string, preview: string }[] = [];
  isLoading = true;
  isUploading = false;
  isSaving = false;
  spaceTypeOptions = Object.values(SpaceType);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spaceService: SpaceService,
    private imageUploadService: ImageUploadService
  ) {
    this.spaceId = this.route.snapshot.paramMap.get('id') || '';
    this.space = this.createEmptySpace();
  }

  ngOnInit(): void {
    if (!this.spaceId) {
      this.router.navigate(['/']);
      return;
    }

    this.loadSpaceData();
    this.loadSpaceImages();
  }

  private createEmptySpace(): Space {
    return {
      id: '',
      title: '',
      description: '',
      address: '',
      postCode: '',
      city: '',
      price: 0,
      deposit: 0,
      billsIncluded: true,
      availableFrom: new Date().toISOString().split('T')[0],
      spaceType: SpaceType.Room,
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      furnished: true,
      publishedDate: '',
      isVisible: true,
      imageUrl: ''
    };
  }

  private loadSpaceData(): void {
    this.spaceService.getSpaceById(this.spaceId).subscribe({
      next: (space) => {
        this.space = space;
        this.isLoading = false;
      },
      error: () => {
        this.router.navigate(['/']);
      }
    });
  }

  private loadSpaceImages(): void {
    this.imageUploadService.getSpaceImages(this.spaceId).subscribe({
      next: (images) => {
        this.spaceImages = images;
      },
      error: (err) => {
        console.error('Failed to load images', err);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedFiles.push({
            file: file,
            title: file.name.split('.')[0] || `Image ${this.selectedFiles.length + 1}`,
            preview: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  deleteImage(imageId: string): void {
    if (confirm('Are you sure you want to delete this image?')) {
      this.imageUploadService.deleteImage(imageId).subscribe({
        next: () => {
          this.spaceImages = this.spaceImages.filter(img => img.id !== imageId);
        },
        error: (err) => {
          console.error('Failed to delete image', err);
          alert('Failed to delete image');
        }
      });
    }
  }

  uploadImages(): void {
    if (this.selectedFiles.length === 0) return;

    this.isUploading = true;
    const uploadObservables = this.selectedFiles.map(fileItem => {
      const formData = new FormData();
      formData.append('file', fileItem.file);
      formData.append('title', fileItem.title);
      formData.append('spaceId', this.spaceId);
      
      return this.imageUploadService.uploadImage(formData);
    });

    forkJoin(uploadObservables).subscribe({
      next: () => {
        this.selectedFiles = [];
        this.loadSpaceImages();
      },
      error: (err) => {
        console.error('Image upload failed', err);
        alert('Some images failed to upload');
      },
      complete: () => {
        this.isUploading = false;
      }
    });
  }

  onFormSubmit(): void {
    if (!this.space) return;

    this.isSaving = true;
    const updateData: UpdateSpaceRequest = {
      title: this.space.title,
      description: this.space.description,
      address: this.space.address,
      postCode: this.space.postCode,
      city: this.space.city,
      price: this.space.price,
      deposit: this.space.deposit,
      billsIncluded: this.space.billsIncluded,
      availableFrom: this.space.availableFrom,
      spaceType: this.space.spaceType,
      numberOfRooms: this.space.numberOfRooms,
      numberOfBathrooms: this.space.numberOfBathrooms,
      furnished: this.space.furnished
    };

    this.spaceService.updateSpace(this.spaceId, updateData).subscribe({
      next: () => {
        this.router.navigate(['/spaces', this.spaceId]);
      },
      error: (err) => {
        console.error('Failed to update space', err);
        this.isSaving = false;
        alert('Failed to save changes');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/spaces', this.spaceId]);
  }
}
