import { Component, OnInit } from '@angular/core';
import { RSSFeedServiceService } from '../rssfeed-service.service';

@Component({
  selector: 'app-delete-feed',
  templateUrl: './delete-feed.component.html',
  styleUrls: ['./delete-feed.component.css']
})
export class DeleteFeedComponent implements OnInit {
  RSSFeedCollection: any;

  constructor(private service: RSSFeedServiceService) { }

  ngOnInit() {
    this.service.getRSSFeed().then(data => {
      this.RSSFeedCollection = data;
    })
  }

  getRSSFeed() {
    this.RSSFeedCollection = [];
    this.service.getRSSFeed().then(data => {
      this.RSSFeedCollection = data;
    })
  }

  deleteFeed(feed) {
    if (confirm("Are you sure to delete " + feed.name)) {
      this.service.deleteFeed(feed).then(data => { this.getRSSFeed() });
    }
  }
}
