
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;
  reviews = [
    {
      author: 'Alice',
      rating: 5,
      text: 'Absolutely amazing experience!'
    },
    {
      author: 'John',
      rating: 4,
      text: 'Beautiful place and friendly locals.'
    },
    {
      author: 'Maria',
      rating: 5,
      text: 'A destination I will never forget.'
    },
    {
      author: 'Alice',
      rating: 5,
      text: 'Absolutely amazing experience!'
    },
    {
      author: 'John',
      rating: 4,
      text: 'Beautiful place and friendly locals.'
    },
    {
      author: 'Maria',
      rating: 5,
      text: 'A destination I will never forget.'
    }
  ];

  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Load more reviews');
      }
    });
    io.observe(this.anchor.nativeElement);
  }
}
