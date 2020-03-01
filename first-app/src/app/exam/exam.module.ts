import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullExamComponent } from './components/full-exam/full-exam.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionViewerComponent } from './components/question-viewer/question-viewer.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [FullExamComponent, QuestionListComponent, QuestionViewerComponent, TimerComponent],
  exports: [FullExamComponent],
  imports: [
    CommonModule
  ]
})
export class ExamModule { }
