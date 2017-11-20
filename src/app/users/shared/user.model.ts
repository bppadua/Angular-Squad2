import { Injectable } from '@angular/core';

@Injectable()
export class User {
    constructor(
        public identifier?: string,
        public name?: string,
        public email?: string,
        public password?: string
      ) { }
}
