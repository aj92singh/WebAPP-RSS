import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { PromiseState } from 'q';


@Injectable({
  providedIn: 'root'
})
export class RSSFeedServiceService {

  public baseURL="http://localhost:3743/api/RSSFeed/";

  constructor(private http: HttpClient,        private spinnerService: Ng4LoadingSpinnerService
    ) { }

  getRSSFeed():Promise<any>{
    this.spinnerService.show();
    return this.http.get(this.baseURL+'GetAllRSS').toPromise().then(response=>{
      this.spinnerService.hide();
      return response;
      
    })
  }

  getFeedData(feed):Promise<any>{
    this.spinnerService.show();
    return this.http.post(this.baseURL+'ReadFeed',{URL:feed.feedUrl}).toPromise().then(response=>{
      this.spinnerService.hide();
      return response;
    })
  }

  InsertRSS(data):Promise<any>{
    this.spinnerService.show();
    let headers:HttpHeaders= new HttpHeaders();
    headers.append('accept', 'text/plain');
    return this.http.post(this.baseURL+'InsertRSS',data,{headers}).toPromise().then(response=>{
      this.spinnerService.hide();
      return response;
    })
  }

  deleteFeed(data):Promise<any>{
    this.spinnerService.show();

    return this.http.delete(this.baseURL+'DeleteRSS?id='+data.id).toPromise().then(response=>{
      this.spinnerService.hide();
      return response;
    })
  }
}
