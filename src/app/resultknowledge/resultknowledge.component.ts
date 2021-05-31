import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { resultknowledgeService } from './resultknowledge.service'
@Component({
  selector: 'app-resultknowledge',
  templateUrl: './resultknowledge.component.html',
  styleUrls: ['./resultknowledge.component.scss'],
})
export class ResultknowledgeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private resultknowledge: resultknowledgeService) { }
  techs={
    questiongetView:{
      title:'question'
    },
    typedriverlicensegetView:{
      title:'type driver license'
    },
    penaltygetView:{
      title:'penalty'
    }
  }
  answer
  title
  car
  motorcycle

  ngOnInit() {
    this.resultknowledge.viewknowledge(this.activatedRoute.snapshot.params.page).then((data) => {
      const tech = this.techs[this.activatedRoute.snapshot.params.page];
      console.log(data)
     if(tech.title === 'question'){
      this.answer=data['data']
      this.title = tech.title
     }else if(tech.title === 'type driver license'){
      this.answer=data['data']
      this.title = tech.title
     }else if(tech.title === 'penalty'){
      this.answer=data['data']
      this.title = tech.title
     }
      
    }).catch((error) => {
      console.log(error)
    })
  }

}
