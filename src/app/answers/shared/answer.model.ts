import { User } from './../../users/shared/user.model';
import { Injectable } from '@angular/core';
import { Question } from './../../questions/shared/question.model';

export class Answers {
    constructor(
        public identifier?: string,
        public answer?: string,
        public question?: Question,
        public user?: User,
        public nameUser?: string,
        public tag?: string
      ) { }
}

