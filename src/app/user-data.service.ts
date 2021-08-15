import { Injectable } from '@angular/core';
import Video from './models/Video';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  videoList: Video[] = []

  videoListObservable = new BehaviorSubject<Video[]>([]);

  constructor() { }


  addVideoToPlaylist = (video: Video) => {
    this.videoList.push(video);
    this.videoListObservable.next(this.videoList);
    console.log(`Number of videos added: ${this.videoList.length}`);
  }


  retrieveVideosFromPlaylist = () => {
    return this.videoList;
  }

  removeAll = () => {
    this.videoList = [];
    this.videoListObservable.next(this.videoList);
  }
}
