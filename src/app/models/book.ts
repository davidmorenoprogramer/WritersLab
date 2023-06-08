export interface Chapter{
    id:number;
    bookid:number;
    titleChapter: String;
    text:String;

}
export interface Book{
    id: number;
    title?: String;
    author?: String;
    sinopsis?: String;
    chapters?: Chapter[];

}