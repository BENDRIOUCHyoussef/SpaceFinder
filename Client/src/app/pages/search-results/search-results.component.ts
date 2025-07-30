import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCardComponent } from '../../components/listing-card/listing-card.component';

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
  selector: 'app-search-results',
  imports: [CommonModule, ListingCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  sampleListings: Listing[] = [
    {
      id: '1',
      title: 'Bright Double Room in Shoreditch',
      address: 'Shoreditch, London',
      price: 950,
      deposit: '1 month',
      type: 'Double Room',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Washing Machine', 'Central Heating', 'Bills Included', 'Double Bed']
    },
    {
      id: '2',
      title: 'Modern Studio in Camden',
      address: 'Camden, London',
      price: 1200,
      deposit: '6 weeks',
      type: 'Studio',
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Kitchen', 'Private Bathroom', 'TV', 'Parking']
    },
    {
      id: '3',
      title: 'Cozy Single Room in Kensington',
      address: 'Kensington, London',
      price: 750,
      deposit: '4 weeks',
      type: 'Single Room',
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Garden', 'Bills Included', 'Central Heating']
    },
    {
      id: '4',
      title: 'Spacious Double Room in Hackney',
      address: 'Hackney, London',
      price: 850,
      deposit: '1 month',
      type: 'Double Room',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Washing Machine', 'Kitchen', 'Bills Included']
    },
    {
      id: '5',
      title: 'Designer Studio in Notting Hill',
      address: 'Notting Hill, London',
      price: 1500,
      deposit: '6 weeks',
      type: 'Studio',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Kitchen', 'Private Bathroom', 'Balcony', 'Parking']
    },
    {
      id: '6',
      title: 'Shared Room in Bethnal Green',
      address: 'Bethnal Green, London',
      price: 600,
      deposit: '2 weeks',
      type: 'Shared Room',
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amenities: ['WiFi', 'Washing Machine', 'Kitchen', 'Bills Included']
    }
  ];

  onViewListing(listingId: string) {
    console.log('View listing:', listingId);
    // Navigate to listing detail page
  }
}
