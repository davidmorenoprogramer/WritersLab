import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Chapter } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  constructor() { this.books = [
    {id: 1,title:'las cronicas de narnia',sinopsis:'sadf',delete:false}
]}
  
  getBooks(){

    var bookNoDelete = this.books.filter(book => book.delete == false)
    return bookNoDelete;


  }
  addNewBook(book: Book){
    
    this.books.push(book);
    
  }

  deleteBook(id:number){
    var book = this.books.find(x => x.id === id) as Book
    book.delete = true;

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

