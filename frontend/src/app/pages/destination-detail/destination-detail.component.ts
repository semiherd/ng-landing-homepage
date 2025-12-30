
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-destination-detail',
  template: '<h1>{{id}}</h1>'
})
export class DestinationDetailComponent implements OnInit {
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.title.setTitle(this.id + ' | Travel');
    this.meta.updateTag({ name: 'description', content: 'Explore ' + this.id });
  }
}
