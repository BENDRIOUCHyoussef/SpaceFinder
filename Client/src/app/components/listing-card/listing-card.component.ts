import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Listing {
  id: string;
  title: string;
  address: string;
  price: number;
  deposit: string;
  type: string;
  imageUrl: string;
  amenities: string[];
}

@Component({
  selector: 'app-listing-card',
  imports: [CommonModule],
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  @Input() listing: Listing = {
    id: '',
    title: '',
    address: '',
    price: 0,
    deposit: '',
    type: '',
    imageUrl: '',
    amenities: []
  };
  
  @Output() viewListing = new EventEmitter<string>();
  @Output() favoriteToggled = new EventEmitter<{id: string, favorite: boolean}>();

  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteToggled.emit({
      id: this.listing.id,
      favorite: this.isFavorite
    });
  }
}