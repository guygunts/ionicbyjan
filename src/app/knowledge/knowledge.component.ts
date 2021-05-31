import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  showDetail(data,page){
    return  this.router.navigate([`/${data}`,{page: page}]);
   
   }

}
