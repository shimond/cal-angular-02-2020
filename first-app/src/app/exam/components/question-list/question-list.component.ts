import { Output, Component, OnInit, Input, EventEmitter } from '@angular/core';
import { QA } from 'src/app/models/qa.model';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Input() questions: QA[];
  @Output() questionSelected = new EventEmitter<QA>();
  @Input() selectedQuestion: QA;

  constructor(private examService: ExamService) { }

  ngOnInit() {
  }

  selectQuestion(qa: QA) {
    this.questionSelected.emit(qa);
  }
  
  isCorrect(q: QA) {
    return this.examService.getQuestionStatus(q) === 'Correct';
  }

  isIncorrect(q: QA) {
    return this.examService.getQuestionStatus(q) === 'Incorrect';

  }

}
