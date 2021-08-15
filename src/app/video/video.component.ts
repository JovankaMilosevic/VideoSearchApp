import { Component, OnInit, Input } from '@angular/core';
import Video from '../models/Video';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() currVideo:Video = {} as Video;
  isInPlaylist:boolean = false;

  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.userDataService.videoListObservable.subscribe(
      (videoListObservable)=>{
        if (videoListObservable.length === 0){
          this.isInPlaylist = false;
        }
      })
  }

  btnAddToPlaylist = () => {
    this.userDataService.addVideoToPlaylist(this.currVideo);
    this.isInPlaylist = true;
  }

}
