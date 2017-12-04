import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { QuestionsCrudComponent } from './questions-crud/questions-crud.component';
@NgModule({
  imports: [
    CommonModule, RouterModule,ReactiveFormsModule, FormsModule,MaterialModule
  ],
  declarations: [QuestionListComponent, QuestionsCrudComponent]
})
export class QuestionsModule { }
