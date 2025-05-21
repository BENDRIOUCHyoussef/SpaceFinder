import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddSpaceModel } from '../models/Add-space-request.model';
import { SpaceService } from '../services/space.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { SpaceType } from '../models/spaceType.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listing-creation',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './listing-creation.component.html',
  styleUrl: './listing-creation.component.scss'
})
export class ListingCreationComponent implements OnDestroy {
  
  model: AddSpaceModel;
  spaceTypeOptions!: string[];
  SpaceType: typeof SpaceType = SpaceType; // Make enum available in template
  private addSpaceSubscription?: Subscription;
  isImageSelectorVisible: boolean = false;

  constructor(private spaceService: SpaceService, private router: Router) {
    this.model = {
      title: '',
      description: '',
      address: '',
      postCode: '',
      city: '',
      price: 0,
      deposit: 0,
      billsIncluded: true,
      availableFrom: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
      spaceType: SpaceType.Room, // Default value
      numberOfRooms: 1,
      numberOfBathrooms: 1,
      furnished: true,
      featuredImageUrl: ''
    };
  }

  ngOnInit() {
    // Get the string values of the enum
    this.spaceTypeOptions = this.getEnumValues(SpaceType);
  }

  private getEnumValues(enumObj: any): string[] {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))
      .map(key => enumObj[key]);
  }

  onFormSubmit() {
    console.log(this.model);
    this.addSpaceSubscription = this.spaceService.addSpace(this.model).subscribe({
      next: (response: any) => {
        console.log('Success!', response);
        console.log('Backend response:', response);
        const spaceId = response.id;
        console.log('Space ID:', spaceId);
        this.router.navigate(['/upload-images', response.id]);
        
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }

  closeImageSelector(): void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.addSpaceSubscription?.unsubscribe();
  }
}
