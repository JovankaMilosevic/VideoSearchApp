import { Component, OnInit } from '@angular/core';
import { DailyMotionService } from '../daily-motion.service';
import Video from '../models/Video';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  videosListFromAPI: Video[] = [];

  searchTerm: string = '';

  constructor(private data: DailyMotionService) { };

  ngOnInit(): void {
  }


  btnGetVideosPressed = () => {
    console.log("btn get videos pressed");


    this.data.retrieveSearchedVideosFromAPI(this.searchTerm).subscribe((dataFromAPI: any) => {
      this.videosListFromAPI = dataFromAPI["list"];
      console.log(this.videosListFromAPI);
    })
  }


  onKey = (event: any) => {
    this.searchTerm = event.target.value;
    console.log(`Search term: ${this.searchTerm}`);
  }

}
