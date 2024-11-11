import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iQuestion } from 'src/app/home/question.model';

@Component({
  selector: 'app-q-view',
  templateUrl: './q-view.component.html',
  styleUrls: ['./q-view.component.css']
})
export class QViewComponent {
  @Output() close = new EventEmitter();
  @Input() question!: iQuestion;

  closeClicked(){
    this.close.emit()
  }
}
