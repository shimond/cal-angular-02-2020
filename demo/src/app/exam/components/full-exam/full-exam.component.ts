import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { QA } from 'src/app/models/qa.model';
import { UserAnsweredArs } from 'src/app/models/users-answered-args.model';

@Component({
  selector: 'app-full-exam',
  templateUrl: './full-exam.component.html',
  styleUrls: ['./full-exam.component.scss']
})
export class FullExamComponent implements OnInit {
  allQuestions: QA[];
  selectedQuestion: QA;

  ngOnInit() {
    this.examService.getQuestions().subscribe(result => {
      this.allQuestions = result;
      this.selectedQuestion = this.allQuestions[0];
    });
  }

  onQuestionSelected(qa: QA) {
    this.selectedQuestion = qa;
  }

  onUserAnswered(e: UserAnsweredArs) {
    e.qa.userAnswer = e.userAnswered;
    setTimeout(() => {
      let currentIdx = this.allQuestions.indexOf(e.qa);
      currentIdx++;
      if (currentIdx < this.allQuestions.length - 1) {
        this.selectedQuestion = this.allQuestions[currentIdx];
      }
    }, 5000);

  }

  getGrade() {
    const correctCount = this.allQuestions.filter(x => this.examService.getQuestionStatus(x) === 'Correct').length;
    return correctCount / this.allQuestions.length * 100;
  }

  constructor(private examService: ExamService) {

  }

}
