import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent  implements OnInit {

 
  constructor(public BookService: BookService, private router: Router) {
    
  }

  ngOnInit() {}

  addNewId(){
    var id = this.BookService.getBookId() + 1;
    return id
  }

  addNewBook(addTitle:HTMLInputElement,Sinopsis:HTMLTextAreaElement){

    
    this.BookService.addNewBook({id: this.addNewId(), title: addTitle.value, sinopsis:Sinopsis.value,delete:false})
    addTitle.value = ""
    Sinopsis.value = ""

    this.router.navigate(['tuslibros'] )

    
  }
   
  
}
