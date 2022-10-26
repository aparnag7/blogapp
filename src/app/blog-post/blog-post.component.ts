import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../services/content.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private route : ActivatedRoute , private contentservice : ContentService) { }

  blogPosts : Observable<any> | undefined

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        const id = params['id']
        this.blogPosts = this.contentservice.getEntryByID(id);
      }
    )
  }

  _returnHtmlFromRichText(richText: Document | null | undefined) {
    if (richText === undefined || richText === null ) {
      return '<p>Error</p>';
    }
    console.log(documentToHtmlString(richText));
    return documentToHtmlString(richText);
  }

}
