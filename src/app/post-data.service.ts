import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  private _url:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getPostData(){
    // let url = "http://localhost:3000";
    return this.http.get( this._url );
  }
}
