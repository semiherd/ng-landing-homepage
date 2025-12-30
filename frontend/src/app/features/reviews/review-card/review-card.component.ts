import { Component, Input } from '@angular/core';
import { ParallaxDirective } from 'src/app/shared/directives/parallax.directive';
@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [ParallaxDirective],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})

export class ReviewCardComponent {
  @Input() author!: string;
  @Input() text!: string;
  @Input() rating!: number;
}
