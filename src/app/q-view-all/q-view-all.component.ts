import { Component } from '@angular/core';
import { iQuestion } from '../home/question.model';
import { ApiCallService } from '../home/api-call.service';

@Component({
  selector: 'app-q-view-all',
  templateUrl: './q-view-all.component.html',
  styleUrls: ['./q-view-all.component.css']
})
export class QViewAllComponent {
  allQuestions: iQuestion[] = []; // Store all the questions here
  questions: iQuestion[] = [];
  question: any = [];
  searchId: string = '';
  viewQuestion: any;
  viewOpened: boolean = false;
  

  constructor(private apiSvc: ApiCallService){}

  ngOnInit(){
    this.apiSvc.getQuestions().subscribe(questions => {
      this.allQuestions = questions;
      this.questions = [...questions]
    })
  }

  onSearch() {
    const id = parseInt(this.searchId, 10);  // Convert searchId to a number
    if (isNaN(id)) {
      // If searchId is not a valid number, reset to all questions
      this.questions = [...this.allQuestions];
    } else {
      this.searchQuestionID(id);
    }
  }

  searchQuestionID(id: number | null) {
    if (id === null || id === undefined) {
      // If id is null or undefined, reset to all questions
      this.questions = [...this.allQuestions];
    } else {
      // Otherwise, find the question by ID and set it as the only item in questions array
      const foundQuestion = this.allQuestions.find(question => question.id === id);
      this.questions = foundQuestion ? [foundQuestion] : [];
    }
  }

  searchCategory(category: string) {
    if(category === null || category === '') {
      this.questions = [...this.allQuestions];
    } else {
      const filteredQuestion = this.allQuestions.filter(question => question.category === category)
      this.questions = filteredQuestion;
    }
  }

  openQuestion(id?:number){
    if(id) {
      this.viewOpened = !this.viewOpened
      this.viewQuestion = this.allQuestions.find(question => question.id === id)
    } else {
      this.viewOpened = !this.viewOpened
    }
  }
  
}
