import { Component,Input } from '@angular/core';
import { Destination } from 'src/app/core/models/destination.model';
import { ParallaxDirective } from 'src/app/shared/directives/parallax.directive';

@Component({
  standalone: true,
  imports:[ParallaxDirective],
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() name!: string;
  @Input() country!: string;
  @Input() image!: string;
}