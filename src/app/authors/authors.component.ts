import { Component, OnInit } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  author: Author = {
    name: 'Achola',
    email: 'sam.achola@live.com',
    github: 'samachola',
    twitter: 'achola_sam',
    location: 'nairobi',
    last_article_published: 'The legend of awesome'
  };

  constructor() { }

  ngOnInit() {
  }

}
