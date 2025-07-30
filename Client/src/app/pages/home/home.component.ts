import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimplesearchbarComponent } from '../../components/simplesearchbar/simplesearchbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ListingCardComponent } from '../../components/listing-card/listing-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, SimplesearchbarComponent, HeaderComponent, ListingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onSearch(query: string) {
    console.log('Search query:', query);
    // Implement your search logic here
  }

  onViewListing(listingId: string) {
    console.log('View listing:', listingId);
    // Implement navigation to listing detail page
    // this.router.navigate(['/listings', listingId]);
  }

}
