import { Component, OnInit } from '@angular/core';
import { RSSFeedServiceService } from '../rssfeed-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.css']
})
export class AddFeedComponent implements OnInit {

  constructor(private service:RSSFeedServiceService,private router: Router) { }

  data = {
    name: null,
    url: null
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.data.name == '' || this.data.name==null || this.data.url==null || this.data.url == '') {
      alert('Name and URL cannot be empty');
    }
    else{
    this.service.InsertRSS(this.data).then(res=>{
      if(res.error==null){
        alert('Entry Updated!!');
        this.router.navigate(['/'])
      }
    });
    }

  }

}
