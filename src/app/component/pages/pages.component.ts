import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/services/chapter.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/models/book';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent  implements OnInit,AfterViewInit {

  chapter: Chapter = {} as Chapter;
  idbook: number = 0;
  idcharacter: number = 0;
  

  constructor(public chapterService: ChapterService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idcharacter = Number(params['idChapter'])
      this.idbook = Number(params['idBook'])
      
  });

  }
  ngAfterViewInit(): void {
    
    this.chapter = this.chapterService.getChapterById(this.idbook,this.idcharacter);
    let title = (<HTMLInputElement>document.getElementById("addTitle"));
    title.value = this.chapter.titleChapter as string;
    let textChapter = (<HTMLTextAreaElement>document.getElementById("addChapterText"));
    textChapter.value = this.chapter.text as string;
  }
  


  addChapter(addTitle:HTMLInputElement,addChapterText:HTMLTextAreaElement){

    this.chapterService.editCharacter(this.idbook,this.idcharacter,{id: this.idcharacter, bookid:this.idbook, titleChapter:addTitle.value, text: addChapterText.value})

    //this.chapterService.addChapter({titleChapter:addTitle.value, text: addChapterText.value})
    return false;
  }
}
