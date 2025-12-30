import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationCardComponent } from './destination-card/destination-card.component';

@Component({
  selector: 'app-favorite-destinations',
  standalone: true,
  imports: [CommonModule, DestinationCardComponent],
  templateUrl: './favorite-destinations.component.html',
  styleUrls: ['./favorite-destinations.component.css']
})

export class FavoriteDestinationsComponent {
  destinations = [
    {
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1505731139091-635f57f2a85d'
    },
    {
      name: 'Kyoto',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c'
    },
    {
      name: 'Reykjavik',
      country: 'Iceland',
      image: 'https://images.unsplash.com/photo-1500048993959-d23a436266cf'
    }
  ];
}
