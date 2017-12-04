import { Injectable } from '@angular/core';
import { Room } from './../../rooms/shared/room.model';

export class Question {
    constructor(
        public identifier?: string,
        public question?: string,
        public name?: string,
        public desc?: string,
        public room?: Room,
        public isActive?: boolean
      ) { }
}
