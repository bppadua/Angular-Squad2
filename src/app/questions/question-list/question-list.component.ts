import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MaterialModule} from '../../shared/material/material.module';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  getAnswers(idRoom){
    this.router.navigate(['answers/'+idRoom]);
  }

}
