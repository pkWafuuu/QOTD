import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { iQuestion } from './question.model';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = 'https://qotd-backend.onrender.com/question/all';

  questions : any; 
  iQuestion : iQuestion[] = [];

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<iQuestion[]> {
    return this.http.get<{ questions: iQuestion[] }>(this.url).pipe(map(response => response.questions));
  }
  
  add(question: iQuestion) {
    this.http
      .post('https://qotd-backend.onrender.com/question/all', question)
      .subscribe({
            next: data => {
                
            },
            error: error => {
                Swal.fire("Error")
                console.error('There was an error!!', error);
            }
        });;
  }
} 
