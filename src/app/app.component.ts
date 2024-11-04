import { Component } from '@angular/core';
import { ApiCallService } from './home/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qotd';
  questions: any;

  constructor(private apiSvc: ApiCallService){}

  // ngOnInit(){
  //   this.apiSvc.getQuestions().subscribe(questions => {
  //     this.questions = questions
  //     console.log(this.questions.questions)
  //   })
  // }

}
