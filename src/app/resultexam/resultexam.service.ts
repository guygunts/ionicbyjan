import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class resultexamService {

    constructor(private http: HttpClient ) { }


    async viewresultexam() {
      
         
         const datajson =await this.http.get(`/examgetView`, {headers: {'Content-type': 'application/json'} }).toPromise()
        return datajson
    }
}