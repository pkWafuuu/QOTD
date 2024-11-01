import { Component } from '@angular/core';
import { iQuestion } from './question.model';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questions: any;
  randomQuestion: any;

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

  generateRandomQ(){
    const randomIndex = Math.floor(Math.random() * this.questions.questions.length);
    this.randomQuestion = this.questions.questions[randomIndex]
  }

}
