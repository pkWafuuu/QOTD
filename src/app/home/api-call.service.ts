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
  url = 'https://qotd-backend.onrender.com/question/all';

  questions?: any;
  iQuestion?: iQuestion[] = [];

  constructor(private http: HttpClient, private validate: ValidationService) {}

  getQuestions(): Observable<iQuestion[]> {
    // return this.http
    //   .get<{ questions: iQuestion[] }>(this.url)
    //   .pipe(map((response) => response.questions));
    return this.http.get<any>(this.url).pipe(
      // tap(response => console.log('Raw response:', response)),
      map((response) =>
        response.map((item: any) => ({
          id: item.qid, // Map `qid` to `id`
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

    this.http
      .post('https://qotd-backend.onrender.com/question', {}, { params })
      .subscribe({
        next: (data) => {
          console.log('Response received:', data);
          Swal.fire('Question created successfully!');
        },
        error: (error) => {
          Swal.fire('Error creating question');
          console.error('There was an error!!', error);
        },
      });
  }

  delete(id: number) {
    this.http
      .delete(`https://qotd-backend.onrender.com/question/${id}`)
      .subscribe({
        next: () => {
          console.log(`Object with ID ${id} deleted successfully`);
        },
        error: (error) => {
          Swal.fire('Error', 'Failed to delete the object', 'error');
          console.error('There was an error deleting the object:', error);
        },
      });
  }
}
