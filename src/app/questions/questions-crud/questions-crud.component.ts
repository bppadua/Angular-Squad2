import { Question } from './../shared/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-crud',
  templateUrl: './questions-crud.component.html',
  styleUrls: ['./questions-crud.component.css']
})
export class QuestionsCrudComponent implements OnInit {
  name: string;
  description: string;
  question: Question = new Question();

  constructor() { }

  ngOnInit() {
  }

  register(event){
    event.preventDefault();
    this.question.identifier = "ques";
    this.question.name = this.name;
    this.question.desc=this.description;
    this.question.isActive = true;
    if(!localStorage.getItem("questions")){
      localStorage.setItem("questions","[]");
    }
    let arr = JSON.parse(localStorage.getItem("questions"));
    arr.push(this.question);
    localStorage.setItem("questions",JSON.stringify(arr));
  }
  //}

  debug(): string {
    let arr = JSON.parse(localStorage.getItem("questions"));
    arr.push(this.question);
    localStorage.setItem('questions', JSON.stringify(arr))
		return JSON.stringify(arr);
	}
}
