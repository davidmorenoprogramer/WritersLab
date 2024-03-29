import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chapter } from 'src/app/models/book';
import { ChapterService } from 'src/app/services/chapter.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.routerState.snapshot.url;
      
      if (currentRoute.startsWith('/tuslibros')) {  
        const chapterNumber = this.route.snapshot.paramMap.get('idBook');
        if (chapterNumber) {
          this.book = this.bookService.getBookById(this.id)
          this.chapter = this.chaptersService.getChaptersByBook(this.id);}
         }
    });


   
   
  }



  ngOnDestroy(){
    
    this.subcription.unsubscribe()

  }

  character(idchar:Number){

    
    this.router.navigate(['tuslibros',this.book.id, idchar] )

  }


  addNewIdcharacter(){
    var id = this.chaptersService.getcharacterbookid(this.book.id) + 1
   
    return id
  }


  addnewchapter(){
    
    let characterid = this.addNewIdcharacter()
    this.chaptersService.addChapter({id:characterid, bookid: this.book.id, titleChapter: "nuevo capitulo", text:"",delete:false})
    this.router.navigate(['tuslibros',this.book.id, characterid])


  }

  trackByValues(index: number, value: any) { return value.id; }
}
