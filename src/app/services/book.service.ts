import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Chapter } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  constructor() { this.books = [
    {id: 1,title:'las cronicas de narnia',sinopsis:'sadf'}
]}
  
  getBooks(){
    return this.books;
  }
  addNewBook(book: Book){
    
    this.books.push(book);
    
  }

 

  getBookById(id:number){
    return this.books.find(x => x.id === id) as Book;
  }
  getBookChapters(id:number){
    let i = this.getBookById(id).chapters
    this.getBookById(id)
    
    return i
  }
  getBookId(){
    var id = this.books.length;
    return id
  }

}

