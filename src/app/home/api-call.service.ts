import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { iQuestion } from './question.model';
import { map, Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { ValidationService } from '../validation.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private baseUrl = 'https://qotd-backend.onrender.com/question'

  questions?: any;
  iQuestion?: iQuestion[] = [];

  constructor(private http: HttpClient, private validate: ValidationService) {}

  getQuestions(): Observable<iQuestion[]> {
    return this.http.get<any>(`${this.baseUrl}/all`).pipe(
      map((response) =>
        response.map((item: any) => ({
          id: item.qid,
          category: item.category,
          question: item.question,
        }))
      )
    );
  }

  add(question: iQuestion) {
    const params = new HttpParams()
      .set('category', question.category)
      .set('question', question.question);

    return this.http.post(`${this.baseUrl}`, {}, { params })
  }

  edit(question: iQuestion) {
    const params = new HttpParams()
      .set('question', question.question)

    return this.http.put(`${this.baseUrl}/${question.id}`, {}, { params })
  }

  delete(id: number): Observable<any>{
    return this.http
      .delete(`${this.baseUrl}/${id}`);
  
  }
}
