import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
@NgModule({
  imports: [
    CommonModule, RouterModule,ReactiveFormsModule, FormsModule,MaterialModule
  ],
  declarations: [QuestionListComponent]
})
export class QuestionsModule { }
