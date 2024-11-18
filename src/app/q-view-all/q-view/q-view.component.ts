import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiCallService } from 'src/app/home/api-call.service';
import { iQuestion } from 'src/app/home/question.model';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-q-view',
  templateUrl: './q-view.component.html',
  styleUrls: ['./q-view.component.css']
})
export class QViewComponent {
  @Output() close = new EventEmitter();
  @Input() question!: iQuestion;

  closeClicked(){
    this.close.emit()
  }

  constructor(private callApi: ApiCallService, private validate: ValidationService){}

  addQuestion(question: iQuestion){
    this.callApi.add(question)
  }

  async deleteQuestion(question: iQuestion){
    try {
      const isConfirmed = await this.validate.confirm(question  , 'delet');
      if (isConfirmed) {
        await this.callApi.delete(question.id!);
        console.log("Question deleted successfully!");
      } else {
        console.log("Validation failed. Cannot proceed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
