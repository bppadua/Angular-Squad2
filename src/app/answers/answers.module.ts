import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [AnswerListComponent],
  exports:[AnswerListComponent]
})
export class AnswersModule { }

