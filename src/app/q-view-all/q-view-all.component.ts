import { Component } from '@angular/core';
import { iQuestion } from '../home/question.model';

@Component({
  selector: 'app-q-view-all',
  templateUrl: './q-view-all.component.html',
  styleUrls: ['./q-view-all.component.css']
})
export class QViewAllComponent {
  questions: iQuestion[];

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
      {
        id:5,
        question: "ME WHO?",
      },
    ]
  }
}
