import { QuestionsCrudComponent } from './../questions-crud/questions-crud.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MaterialModule} from '../../shared/material/material.module';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public question: QuestionsCrudComponent = new QuestionsCrudComponent();
  constructor() { }

  ngOnInit() {
  }

  debug(): string {
    let arr = JSON.parse(localStorage.getItem("questions"));
    //localStorage.setItem('questions', JSON.stringify(arr))
		return JSON.stringify(arr);
	}

}
