import { Injectable } from '@angular/core';
import { User } from './../../users/shared/user.model';

@Injectable()
export class Room {
    constructor(
        public identifier?: string,
        public name?: string,
        public desc?: string,
        public responsible?: User,
        public isActive?: boolean,
        public feedback?: string
      ) { }
}
