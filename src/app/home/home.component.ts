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

  constructor(private apiSvc: ApiCallService){}

  ngOnInit(){
    this.apiSvc.getQuestions().subscribe(questions => {
      this.questions = questions
    })
  }


  generateRandomQ(){
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[randomIndex].question
  }

}
