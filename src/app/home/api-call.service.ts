import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { iQuestion } from './question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = 'https://qotd-backend.onrender.com';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: "/question/all"}})
  }
}
