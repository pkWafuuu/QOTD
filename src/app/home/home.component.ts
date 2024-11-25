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
  isLoading: boolean = true

  constructor(private apiSvc: ApiCallService){}

  fetchData() {
    this.isLoading = true; // Start loading
    this.apiSvc.getQuestions().subscribe(
      (response) => {
        this.isLoading = false; // Stop loading on success
        this.questions = response
        console.log(response);
      },
      (error) => {
        this.isLoading = false; // Stop loading on error
        console.error(error);
      }
    );
  }

  ngOnInit(){
    this.fetchData()
    // this.apiSvc.getQuestions().subscribe(question => {
    //   this.questions = question
    //   console.log(this.questions)
    // })
  }

  generateRandomQ(){
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[randomIndex].question
  }

}
