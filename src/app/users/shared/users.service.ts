import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UsersService {

	constructor(
		private http: Http,
		public firebase: AngularFireAuth,
		public router: Router
	) { }

	get(username: string): Observable<any> {
		return this.http
			.get(`users/${username}`)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}


    doLogin(email: string, password: string) {
        return this.firebase.auth.signInWithEmailAndPassword(email, password);
    }

    doSignUp(email: string, password: string) {
        return this.firebase.auth.createUserWithEmailAndPassword(email, password);
    }

    doUpdateOnSignUp(name: string) {
        return this.firebase.auth.currentUser.updateProfile({displayName: name, photoURL: null});
    }

    doAnonymousLogin(){
        return this.firebase.auth.signInAnonymously();
    }

	doLogout(): void {
		this.firebase.auth.signOut().then(rs => {this.router.navigateByUrl('login')	});
	} 

}