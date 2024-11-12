import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iQuestion } from './home/question.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ApiPutService {
  private iQuestion: iQuestion[] = [];

  constructor(private http: HttpClient) {}

  add(question: iQuestion) {
    this.http
      .post('https://qotd-backend.onrender.com/question/all', this.iQuestion)
      .subscribe({
            next: data => {
                
            },
            error: error => {
                Swal.fire("Error")
                console.error('There was an error!', error);
            }
        });;
  }
}
