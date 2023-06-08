import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/book';
import { ChapterService } from 'src/app/services/chapter.service';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss'],
})
export class ChapterListComponent  implements OnInit {

  id: number = 0;
  book: Book = {} as Book;
  chapter: Chapter[];
  idchapter :number = 0

  constructor(public chaptersService: ChapterService, private route: ActivatedRoute,private bookService : BookService,private router: Router) {
     this.chapter = [];
    }

  ngOnInit() {
    
    
    this.route.params.subscribe(params => {
        this.id = Number(params['idBook'])
        
    });
    this.book = this.bookService.getBookById(this.id)
    this.chapter = this.chaptersService.getChaptersByBook(this.id);
   
  }

  character(idchar:Number){
    this.router.navigate(['tuslibros',this.book.id, idchar] )

  }

  addnewchapter(){
      

  }
}
