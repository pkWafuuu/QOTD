import { Component } from '@angular/core';
import { iQuestion } from '../home/question.model';
import { ApiCallService } from '../home/api-call.service';

@Component({
  selector: 'app-q-view-all',
  templateUrl: './q-view-all.component.html',
  styleUrls: ['./q-view-all.component.css']
})
export class QViewAllComponent {
  questions: any;

  constructor(private apiSvc: ApiCallService){
    
    // this.questions = [
    //   {
    //     id:1,
    //     question: "WHO ARE YOU",
    //   },
    //   {
    //     id:2,
    //     question: "WHO ME YOU?",
    //   },
    //   {
    //     id:3,
    //     question: "YOU WHO?",
    //   },
    //   {
    //     id:4,
    //     question: "ME YOU WHO?",
    //   },
    // ]
  }

  ngOnInit(){
    this.apiSvc.getQuestions().subscribe(questions => {
      this.questions = questions
      console.log(this.questions.questions[0])
    })
  }
}
