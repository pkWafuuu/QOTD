import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { iQuestion } from './question.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = 'https://qotd-backend.onrender.com/question/all';

  questions : any; 

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<iQuestion[]> {
    return this.http.get<{ questions: iQuestion[] }>(this.url).pipe(map(response => response.questions));
  }
} 
