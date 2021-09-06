import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://10.34.128.24:3000/api/assest/"

  constructor(private http:HttpClient) { }

  
  getData(){
    return this.http.get(this.url)
  }

  saveData(newData){
    var returndata;

    if(newData._id){
      returndata = this.http.put(this.url, newData);
    }else{
      returndata = this.http.post(this.url, newData);
    }

    return returndata;
  }

  delData(id){
    return this.http.delete(this.url + id)
  }
}

