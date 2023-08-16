import { Injectable } from '@angular/core';
import { Chapter } from '../models/book';
import { Book } from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapters: Chapter[];
  book: Book = {} as Book;
  
  constructor() { 
    
    
    this.chapters = [{id: 1, bookid:1, titleChapter: 'book1 idter1',text:'af'},{id: 2, bookid:1, titleChapter: 'book1 idter2',text:'af'}]
   

  }
  getChapters(){
    return this.chapters;
  }

  getcharacterbookid(id:number){
    let characters = this.getChaptersByBook(id)
    return characters.length

  }


  addChapter(chapter: Chapter){

    //chapter.bookid = chapter.bookid 
    //let chaptersbookid = this.chapters.filter(x => x.bookid == chapter.bookid)
    this.chapters.push(chapter);
    

  }


  editCharacter(idbook:number,idcharacter:number,chapter: Chapter){
    
    let bookCharapters = this.getChaptersByBook(idbook)
    let index = bookCharapters.findIndex(x => x.id === idcharacter)
    this.chapters[index] = chapter;

  }


  getChapterById(idbook:number,idcharacter:number){
    let bookCharapters = this.getChaptersByBook(idbook)
    let character = bookCharapters.find(x => x.id === idcharacter) as Chapter;
    return character;
  }


  getChaptersByBook(id:number){
 
    return this.chapters.filter(x => x.bookid == id)
  }

}
