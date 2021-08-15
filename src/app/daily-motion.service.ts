import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import Video from './models/Video';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {

  constructor(private http:HttpClient) { }

  retrieveSearchedVideosFromAPI = (searchTerm:string):Observable<Video[]> => {
    return this.http.get<any>("https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search="+searchTerm);
  }
}
