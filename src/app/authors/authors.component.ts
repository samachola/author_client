import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;
  author: Author = {
    name: 'Achola',
    email: 'sam.achola@live.com',
    github: 'samachola',
    twitter: 'achola_sam',
    location: 'nairobi',
    last_article_published: 'The legend of awesome'
  };

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors()
      .subscribe((res) => {
        console.log(res.data);
      });
  }

}
