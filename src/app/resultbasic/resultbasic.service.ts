import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class resultbasicService {

    constructor(private http: HttpClient ) { }


    async viewbasic(data) {
      
         
         const datajson =await this.http.get(`/${data}`, {headers: {'Content-type': 'application/json'} }).toPromise()
        return datajson
    }
}