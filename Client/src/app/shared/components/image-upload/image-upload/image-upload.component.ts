import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageUploadService } from '../../../../pages/features/Space/services/image-upload.service';

@Component({
  selector: 'app-image-upload',
  imports: [FormsModule, CommonModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  spaceId: string;
  selectedFiles: { file: File, title: string, preview: string }[] = [];
  isUploading = false;
  uploadProgress = 0;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imageUploadService: ImageUploadService
  ) {
    this.spaceId = this.route.snapshot.params['id'];
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedFiles.push({
            file: file,
            title: `Image ${this.selectedFiles.length + 1}`,
            preview: e.target.result
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  uploadImages(): void {
    if (!this.spaceId) {
      this.error = 'Space ID is missing';
      return;
    }

    if (this.selectedFiles.length === 0) {
      this.error = 'Please select at least one image';
      return;
    }

    this.isUploading = true;
    this.uploadProgress = 0;
    this.error = null;

    const totalFiles = this.selectedFiles.length;
    let uploadedCount = 0;

    this.selectedFiles.forEach((item, index) => {
      const formData = new FormData();
      formData.append('file', item.file);
      formData.append('title', item.title);
      formData.append('spaceId', this.spaceId);

      this.imageUploadService.uploadImage(this.spaceId, formData).subscribe({
        next: () => {
          uploadedCount++;
          this.uploadProgress = Math.round((uploadedCount / totalFiles) * 100);
          
          if (uploadedCount === totalFiles) {
            this.router.navigate(['/my-listings']);
          }
        },
        error: (err) => {
          this.error = 'Failed to upload some images. Please try again.';
          this.isUploading = false;
        }
      });
    });
  }
}
