import { EventEmitter, Injectable, Output } from '@angular/core';
import { iQuestion } from './home/question.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  @Output() close = new EventEmitter();

  constructor() {}

  confirm(data?: iQuestion, type?: string): Promise<boolean> {
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, ${type} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${type}d!`,
          text: `Your file has been ${type}d.`,
          icon: 'success',
        });
        return true;
      } else {
        return false;
      }
    });
  }

}
