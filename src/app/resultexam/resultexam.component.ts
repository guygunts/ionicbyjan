import { Component, OnInit } from '@angular/core';
import { resultexamService } from './resultexam.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController,ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-resultexam',
  templateUrl: './resultexam.component.html',
  styleUrls: ['./resultexam.component.scss'],
})
export class ResultexamComponent implements OnInit {

  constructor(private exam : resultexamService,private formBuilder: FormBuilder ,private alertController: AlertController,private modal:ModalController) { }
  exams=[]
  result=[]
  todo = {}
  show=0
  ngOnInit() {
 
    this.exam.viewresultexam().then((data) => {
      this.exams=data['data']
      for(let i=0; i<this.exams.length; i++){
        this.result.push({[this.exams[i].exam_name]:this.exams[i].result})
      }
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }


  async totalresult(){
    let number =0
    let name_alert=''
      for (const [key, value] of Object.entries(this.todo)) {
        let imagecar=this.result.find(data1 => data1[key] == value);
       if(imagecar){
        number+=1
       }
      } 
      const score=(this.result.length/100)*60
     if(number>=score){
      name_alert='Pass'
     }else{
      this.show+=1
      name_alert='fail!!!!'
     }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'total score',
      subHeader: `score is ${number}/${this.result.length}`,
      message: `${name_alert}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async openmodal(){
    const modal = await this.modal.create({
      component:ModalComponent
    })

    await modal.present();
  }
}
