import { Component, Input, OnInit } from '@angular/core';
import Video from '../models/Video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listData: Video[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
