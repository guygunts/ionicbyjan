import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { resultexamService } from '../resultexam/resultexam.service'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  exams=[]
  constructor(private exam : resultexamService,private modalCtrl: ModalController) { }
  ngOnInit() {
    this.exam.viewresultexam().then((data) => {
      this.exams=data['data']
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }
 
   dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
