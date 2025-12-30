
import { Component } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./search-bar.component.css'],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  private q$ = new Subject<string>();

  constructor() {
    this.q$.pipe(debounceTime(300)).subscribe(v => console.log(v));
  }

  onInput(e:any) {
    this.q$.next(e.target.value);
  }
}
