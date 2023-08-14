import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/book';
import { ChapterService } from 'src/app/services/chapter.service';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss'],
})
export class ChapterListComponent  implements OnInit, OnDestroy {

  id: number = 0;
  book: Book = {} as Book;
  chapter: Chapter[];
  idchapter :number = 0
  private subcription: Subscription = {} as Subscription;

  constructor(public chaptersService: ChapterService, private route: ActivatedRoute,private bookService : BookService,private router: Router) {
     this.chapter = [];
    
    }

  ngOnInit() {
    
    
    this.subcription = this.route.params.subscribe(params => {
        this.id = Number(params['idBook'])
        
    });
    this.book = this.bookService.getBookById(this.id)
    this.chapter = this.chaptersService.getChaptersByBook(this.id);
   
  }

  ngOnDestroy(){
    
    this.subcription.unsubscribe()

  }

  character(idchar:Number){
    this.router.navigate(['tuslibros',this.book.id, idchar] )

  }

  addnewchapter(){
      

  }

  trackByValues(index: number, value: any) { return value.id; }
}
