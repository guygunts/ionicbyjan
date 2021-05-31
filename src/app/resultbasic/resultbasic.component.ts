import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { resultbasicService } from './resultbasic.service'
@Component({
  selector: 'app-resultbasic',
  templateUrl: './resultbasic.component.html',
  styleUrls: ['./resultbasic.component.scss'],
})
export class ResultbasicComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private resultbasic: resultbasicService) { }
  techs={
    basicdrivergetView:{
      title:'basicdriver'
    },
    propertygetView:{
      title:'property'
    },
    trafficgetView:{
      title:'traffic'
    },
    technicalgetView:{
      title:'technical'
    }
  }
  title
  imagemotorcycle=[]
  imagecar=[]

  ngOnInit() {
    this.resultbasic.viewbasic(this.activatedRoute.snapshot.params.page).then((data) => {
      const tech = this.techs[this.activatedRoute.snapshot.params.page];
      console.log(data)
      if(tech.title === 'basicdriver'){
        let imagecar=data['data'].filter(data1 => data1.type_car == 1);
        this.imagecar=imagecar
         let imagemotorcycle=data['data'].filter(data2 => data2.type_car == 2);
         this.imagemotorcycle=imagemotorcycle
         this.title = tech.title
      }else if(tech.title === 'property'){
        this.imagemotorcycle=data['data']
        this.title = tech.title
      }else if(tech.title === 'traffic'){
        this.imagemotorcycle=data['data']
        this.title = tech.title
      }else if(tech.title === 'technical'){
        this.imagemotorcycle=data['data']
        this.title = tech.title
      }
     
     

    }).catch((error) => {
      console.log(error)
    })
  }

}
