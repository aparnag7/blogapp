import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute ,private contentService :  ContentService) { }

  blogPosts : Observable<any> | undefined
  ngOnInit(): void {
    this.blogPosts = this.contentService.getAllEntries()
  }

}
