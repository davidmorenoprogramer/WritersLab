export interface Chapter{
    id:number;
    bookid:number;
    titleChapter: String;
    text:String;
    delete:boolean;

}
export interface Book{
    id: number;
    title?: String;
    author?: String;
    sinopsis?: String;
    chapters?: Chapter[];
    delete:boolean;
}