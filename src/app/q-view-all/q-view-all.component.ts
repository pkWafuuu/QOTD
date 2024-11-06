import { Component } from '@angular/core';
import { iQuestion } from '../home/question.model';
import { ApiCallService } from '../home/api-call.service';

@Component({
  selector: 'app-q-view-all',
  templateUrl: './q-view-all.component.html',
  styleUrls: ['./q-view-all.component.css']
})
export class QViewAllComponent {
  questions: iQuestion[] = [];
  

  constructor(private apiSvc: ApiCallService){}

  ngOnInit(){
    this.apiSvc.getQuestions().subscribe(questions => {
      this.questions = questions
      console.log(questions)
    })
  }
  
}
