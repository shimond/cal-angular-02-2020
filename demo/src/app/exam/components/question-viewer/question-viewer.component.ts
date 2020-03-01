import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { QA } from 'src/app/models/qa.model';
import { UserAnsweredArs } from 'src/app/models/users-answered-args.model';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit, OnChanges {

  @Input() question: QA;
  @Output() userAnswered = new EventEmitter<UserAnsweredArs>();
  isTimerVisible = true;
  limit = 5;
  isOverTime = false;
  constructor(private examService: ExamService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.isOverTime = false;

    console.log('CHANGED');
    this.isTimerVisible = false;
    this.limit = 5;
    setTimeout(() => this.isTimerVisible = true, 1);
  }

  onOptionClick(asw: string) {
    this.userAnswered.emit({ qa: this.question, userAnswered: asw });
  }

  isLocked() {
    return this.isOverTime ||
      this.examService.getQuestionStatus(this.question) !== 'NowAnswered';
  }
  onTimeOver() {
    this.isOverTime = true;
  }
}
