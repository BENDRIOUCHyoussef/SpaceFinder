import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simplesearchbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './simplesearchbar.component.html',
  styleUrl: './simplesearchbar.component.scss'
})
export class SimplesearchbarComponent {
  // Basic filters
  location: string = '';
  moveInDate: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  roomType: string = '';

  // Advanced filters
  propertyType: string = '';
  maxRoommates: number | null = null;
  furnishing: string = '';
  showAdvancedFilters: boolean = false;

  // Options for dropdowns
  roomTypes = [
    { value: 'single', label: 'Single Room' },
    { value: 'double', label: 'Double Room' },
    { value: 'studio', label: 'Studio' },
    { value: 'shared', label: 'Shared Room' }
  ];

  propertyTypes = [
    { value: 'flat', label: 'Flat/Apartment' },
    { value: 'house', label: 'House' },
    { value: 'student-housing', label: 'Student Housing' },
    { value: 'serviced', label: 'Serviced Apartment' }
  ];

  roommateOptions = [1, 2, 3, 4, 5];

  amenities = [
    { name: 'WiFi', selected: false },
    { name: 'Washing Machine', selected: false },
    { name: 'Dishwasher', selected: false },
    { name: 'Garden', selected: false },
    { name: 'Parking', selected: false },
    { name: 'Bills Included', selected: false },
    { name: 'Central Heating', selected: false },
    { name: 'Double Glazing', selected: false }
  ];

  @Output() search = new EventEmitter<any>();

  onSearch() {
    const selectedAmenities = this.amenities
      .filter(a => a.selected)
      .map(a => a.name);

    this.search.emit({
      location: this.location,
      moveInDate: this.moveInDate,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      roomType: this.roomType,
      propertyType: this.propertyType,
      maxRoommates: this.maxRoommates,
      furnishing: this.furnishing,
      amenities: selectedAmenities
    });
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  clearFilters() {
    // Reset all filters
    this.location = '';
    this.moveInDate = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.roomType = '';
    this.propertyType = '';
    this.maxRoommates = null;
    this.furnishing = '';
    this.amenities.forEach(a => a.selected = false);
  }
}
