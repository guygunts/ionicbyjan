import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class resultknowledgeService {

    constructor(private http: HttpClient ) { }


    async viewknowledge(data) {
      
         
         const datajson =await this.http.get(`/${data}`, {headers: {'Content-type': 'application/json'} }).toPromise()
        return datajson
    }
}