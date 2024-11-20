import { EventEmitter, Injectable, Output } from '@angular/core';
import { iQuestion } from './home/question.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  @Output() close = new EventEmitter();

  constructor() {}

  // confirm(data: iQuestion){
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: "btn btn-success",
  //       cancelButton: "btn btn-danger"
  //     },
  //     buttonsStyling: false
  //   });
  //   swalWithBootstrapButtons.fire({
  //     title: "Do you want to proceed?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     cancelButtonText: "No, cancel!",
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       swalWithBootstrapButtons.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success"
  //       });
  //       this.close.emit();
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire({
  //         title: "Cancelled",
  //         text: "Your imaginary file is safe :)",
  //         icon: "error"
  //       });
  //     }
  //   });
  // }

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
        return true; // Explicitly return true if confirmed
      } else {
        return false; // Explicitly return false if not confirmed
      }
    });
  }

}
