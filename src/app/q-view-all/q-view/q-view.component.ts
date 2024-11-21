import { Component, EventEmitter, Input, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiCallService } from 'src/app/home/api-call.service';
import { iQuestion } from 'src/app/home/question.model';
import { ValidationService } from 'src/app/validation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-q-view',
  templateUrl: './q-view.component.html',
  styleUrls: ['./q-view.component.css'],
})
export class QViewComponent {
  @Output() close = new EventEmitter();
  @Input() question!: iQuestion;
  @Output() reload = new EventEmitter();
  currentQ: string = '';

  

  ngOnInit() {
    if(this.question){
      this.currentQ = this.question.question
    }
  }

  constructor(
    private callApi: ApiCallService,
    private validate: ValidationService
  ) {}

  async closeClicked() {
    if(this.currentQ !== this.question.question){
      const isConfirmed = await this.validate.confirmEdit(this.question); // Wait for confirmation
      if(isConfirmed){
        await firstValueFrom(this.callApi.edit(this.question))
        this.reload.emit()
        this.close.emit()
      } else {
        this.question.question = this.currentQ
        this.close.emit()
      }
    } else {
      this.close.emit();
    }
  }

  async updateQuestion(question: iQuestion) {
    try {
      const isConfirmed = await this.validate.confirm(question, 'update');
      if (isConfirmed) {
        await firstValueFrom(this.callApi.edit(question)) ;
        console.log('Question updated successfully!');
        this.reload.emit();
        this.close.emit()
      } else {
        console.log('Validation failed. Cannot proceed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  async deleteQuestion(question: iQuestion) {
    try {
      const isConfirmed = await this.validate.confirm(question, 'delete');
      if (isConfirmed) {
        await firstValueFrom(this.callApi.delete(question.id!));
        console.log('Question deleted successfully!');
        this.reload.emit();
        this.close.emit()
      } else {
        console.log('Validation failed. Cannot proceed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}
