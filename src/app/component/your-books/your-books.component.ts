import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service'
import {Book} from '../../models/book' 
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-your-books',
  templateUrl: './your-books.component.html',
  styleUrls: ['./your-books.component.scss'],
})
export class YourBooksComponent  implements OnInit {

  books: Book[]
  constructor(private activatedRoute: ActivatedRoute, public bookservice: BookService, private router: Router) {
    this. books = []

    // if router change, actualice books 
    //router.events.subscribe((val) => this.books = this.bookservice.getBooks())

   }

  ngOnInit() {

    ////detects change on route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.routerState.snapshot.url;
     
      if (currentRoute == '/tuslibros') { this.books = this.bookservice.getBooks()}
    });

    
  }


  BookChapters(idBook:number){
   
    this.router.navigate(['tuslibros',idBook] )
    
  }


  deleteBook(idBook:number){
    
    this.bookservice.deleteBook(idBook);
    this.books = this.bookservice.getBooks()
  }


  trackByValues(index: number, value: any) { return value.id; }
}
