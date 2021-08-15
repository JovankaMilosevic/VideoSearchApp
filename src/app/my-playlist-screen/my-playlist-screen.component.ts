import { Component, OnInit } from '@angular/core';
import Video from '../models/Video';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-my-playlist-screen',
  templateUrl: './my-playlist-screen.component.html',
  styleUrls: ['./my-playlist-screen.component.css']
})
export class MyPlaylistScreenComponent implements OnInit {

  myPlaylist: Video[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.videoListObservable.subscribe(
      (dataFromObservable) => {
        this.myPlaylist = dataFromObservable;
      })
  }


  btnClearPressed = () => {
    console.log("Button clear pressed");
    this.userDataService.removeAll();
  }

}
