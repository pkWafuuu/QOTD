import { Component, EventEmitter, Input, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiCallService } from 'src/app/home/api-call.service';
import { iQuestion } from 'src/app/home/question.model';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-q-view',
  templateUrl: './q-view.component.html',
  styleUrls: ['./q-view.component.css'],
})
export class QViewComponent {
  @Output() close = new EventEmitter();
  @Input() question!: iQuestion;
  @Output() reload = new EventEmitter();

  closeClicked() {
    this.close.emit();
  }

  constructor(
    private callApi: ApiCallService,
    private validate: ValidationService
  ) {}

  async updateQuestion(question: iQuestion) {
    try {
      const isConfirmed = await this.validate.confirm(question, 'update');
      if (isConfirmed) {
        await firstValueFrom(this.callApi.edit(question)) ;
        console.log('Question updated successfully!');
        this.reload.emit();
        this.closeClicked();
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
        this.closeClicked();
      } else {
        console.log('Validation failed. Cannot proceed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}
