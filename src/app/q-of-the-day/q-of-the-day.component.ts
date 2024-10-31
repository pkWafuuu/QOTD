import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iQuestion } from '../home/question.model';

@Component({
  selector: 'app-q-of-the-day',
  templateUrl: './q-of-the-day.component.html',
  styleUrls: ['./q-of-the-day.component.css']
})
export class QOfTheDayComponent {
  // @Input randomQ
  @Input() question!: iQuestion | undefined;

  @Output() generateQ = new EventEmitter();

  generateClicked(){
    this.generateQ.emit();
  }
}
