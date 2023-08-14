import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service'
import {Book} from '../../models/book' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-your-books',
  templateUrl: './your-books.component.html',
  styleUrls: ['./your-books.component.scss'],
})
export class YourBooksComponent  implements OnInit {

  books: Book[]
  constructor( public bookservice: BookService, private router: Router) {
    this. books = []
   }

  ngOnInit() {

    this.books = this.bookservice.getBooks()
  }
  BookChapters(idBook:number){
   
    this.router.navigate(['tuslibros',idBook] )
    
  }
  trackByValues(index: number, value: any) { return value.id; }
}
