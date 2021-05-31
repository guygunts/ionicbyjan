import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basicdriver',
  templateUrl: './basicdriver.component.html',
  styleUrls: ['./basicdriver.component.scss'],
})
export class BasicdriverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  showDetail(data,page){
    return  this.router.navigate([`/${data}`,{page: page}]);
   
   }

}
