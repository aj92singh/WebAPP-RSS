import { Component, OnInit } from '@angular/core';
import { RSSFeedServiceService } from '../rssfeed-service.service';
import { RSSFeed } from '../Models/RSSFeed';

@Component({
  selector: 'app-rssfeed',
  templateUrl: './rssfeed.component.html',
  styleUrls: ['./rssfeed.component.css']
})
export class RSSFeedComponent implements OnInit {

  constructor(private service:RSSFeedServiceService) { }

  RSSFeedCollection:any;
  feedData:any;
  ngOnInit() {
    this.service.getRSSFeed().then(data=>{
      this.RSSFeedCollection=data;
    })
  }
  getFeedData(Feed){
    this.service.getFeedData(Feed).then(data=>{
      this.feedData=data;
    })
  }

}
