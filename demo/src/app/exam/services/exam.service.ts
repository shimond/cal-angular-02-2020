import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QA, QuestionStatus } from 'src/app/models/qa.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

  getQuestions(): Observable<QA[]> {
    const arr: QA[] = [
      { text: '2+2', correctAnswer: '4', option: ['1', '55', '4', '13'] },
      { text: '2+6', correctAnswer: '8', option: ['99', '8', '1', '13'] },
      { text: '1+2', correctAnswer: '3', option: ['1', '3', '34', '23'] },
      { text: '9+2', correctAnswer: '11', option: ['5', '11', '14', '13'] },
      { text: '102+24', correctAnswer: '126', option: ['1', '126', '4', '3'] }
    ];
    return of(arr);
  }

  getBestQuestions(): Observable<QA[]> {
    const arr: QA[] = [
      { text: '111112+0', correctAnswer: '4', option: ['1', '111112', '4', '13'] }
    ];
    return of(arr);
  }

  getQuestionStatus(qa: QA): QuestionStatus {
    if (!qa.userAnswer) {
      return 'NowAnswered';
    }
    if (qa.userAnswer === qa.correctAnswer) {
      return 'Correct';
    }
    return 'Incorrect';
  }

}
