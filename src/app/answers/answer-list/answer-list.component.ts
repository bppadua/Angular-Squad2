import {MaterialModule} from '../../shared/material/material.module';
import {Component} from '@angular/core';
import {Answers} from '../shared/answer.model';
import { Question } from '../../questions/shared/question.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'answer-list',
    styleUrls:['./answer-list.component.css'],
    templateUrl: 'answer-list.component.html'
})
export class AnswerListComponent implements OnInit{
    q: Question;
    answers: Answers[] = new Array<Answers>();
    constructor(private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.snapshot.paramMap.get('id');
    }

    
    save(answer:string,event){
        if(event.keyCode != 13) return;
        if(localStorage.getItem("answers") == null){
            localStorage.setItem("answers","[]");
        }
        
        let arr = JSON.parse(localStorage.getItem("answers"));
        let ans = new Answers();
        ans.answer = answer;
        arr.push(ans);
        this.answers.push(ans);
        localStorage.setItem("answers",JSON.stringify(arr));
    }
}