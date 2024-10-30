import { Component } from '@angular/core';
import { iQuestion } from './question.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questions: iQuestion[];
  randomQuestion: iQuestion | undefined;

  constructor(){
    this.questions = [
      {
        id:1,
        question: "WHO ARE YOU",
      },
      {
        id:2,
        question: "WHO ME YOU?",
      },
      {
        id:3,
        question: "YOU WHO?",
      },
      {
        id:4,
        question: "ME YOU WHO?",
      },
    ]
  }

  generateRandomQ(){
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[randomIndex]
  }

}
