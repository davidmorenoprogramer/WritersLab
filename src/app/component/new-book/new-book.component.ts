import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { interval } from 'rxjs';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent  implements OnInit {

 
  constructor(public BookService: BookService) {
    
  }

  ngOnInit() {}

  addNewId(){
    var id = this.BookService.getBookId() + 1;
    return id
  }

  addNewBook(addTitle:HTMLInputElement,Sinopsis:HTMLTextAreaElement){

    
    this.BookService.addNewBook({id: this.addNewId(), title: addTitle.value, sinopsis:Sinopsis.value})
  
  }
   
  
}
