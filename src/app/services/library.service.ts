import { Injectable } from '@angular/core';
import  * as booksOffline from './books.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };
  likeAuthors: any;
  authors: any;

  constructor( private http: HttpClient) { }

  getAuthors() {
    return fetch(`${this.urlServer}authors`).then(
      response => response.json()
    );
  }

  getBooksOffline() {
    return booksOffline;
  }

  getBooksAuthor(author_id:any) {
    return fetch(`${this.urlServer}books_authors?author_id=${author_id}`).then(
      books => books.json()
    )
  }

  getBooks(){
    return fetch(`${this.urlServer}books`).then(
      allBooks => allBooks.json()
    );
  }

  getMyFavoriteBooks(user_id: any){
    return this.http.get(`${this.urlServer}my_favorite_books?user_id=${user_id}`)
  }

  getCheckLikeBook(user_id: any, book_id: any){
    return this.http.get(`${this.urlServer}my_favorite_books?user_id=${user_id}&book_id=${book_id}`)
  }

  likeBook(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.urlServer}favorite_books`,params, this.httpHeaders)
  }

  disLike(user_id: any, book_id:any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.urlServer}dislike`,params, this.httpHeaders)
  }
  
  getAuthorDatabyName(author_name:any){

    return fetch(`https://openlibrary.org/search/authors.json?q=${author_name}`).then(
      author => author.json()
    )

  }

  GetListTopBooks(){
    return fetch(`https://librarypca.fly.dev/top_books`).then(list => list.json())
  }

}