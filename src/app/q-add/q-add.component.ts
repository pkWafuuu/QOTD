import { Component, EventEmitter, Output } from '@angular/core';
import { ApiCallService } from '../home/api-call.service';
import { iQuestion } from '../home/question.model';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-q-add',
  templateUrl: './q-add.component.html',
  styleUrls: ['./q-add.component.css']
})
export class QAddComponent {
  @Output() close = new EventEmitter();
  questionData: iQuestion = {
    category: '',
    question: ''
  };

  constructor(private callApi: ApiCallService, private validate: ValidationService){}

  closeClicked(){
    this.close.emit();
  } 

  async createQuestion(question: iQuestion) {
    try {
      const isConfirmed = await this.validate.confirm(question, 'creat'); // Wait for confirmation
      if (isConfirmed) {
        await this.callApi.add(question);
        console.log("Question added successfully!");
      } else {
        console.log("Validation failed. Cannot proceed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

}