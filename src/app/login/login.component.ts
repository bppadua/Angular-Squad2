import { UsersService } from './../users/shared/users.service';
import { User } from './../users/shared/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
 

export class LoginComponent implements OnInit {

	public user: User = new User();
	public userEmail: String;
	public userPassword: String; 
	public visitorCode: String;
	sucess: boolean = false;

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private translate: TranslateService,
		private app: AppComponent,
		private userService: UsersService
	) { }

	ngOnInit() {
		this.app.refreshSystemLanguage();
	}

	login() {
		this.userService.doLogin(this.user.email, this.user.password)
		.then(rs => {
			localStorage.setItem('currentUser', rs.uid);
			localStorage.setItem('isAnonymous', 'false');
			this.router.navigateByUrl(`/room`);
		})
		.catch(error => {
			console.log(error.message, 1500);
		});
	}

	addNewUser() {
		this.userService.doSignUp(this.user.email, this.user.password)
		.then(rs =>{
			localStorage.setItem('currentUser', rs.uid);
			localStorage.setItem('isAnonymous', 'false');
			this.userService.doUpdateOnSignUp(this.user.name);
			this.sucess = true;
			this.router.navigateByUrl(`/room`);
		})
		.catch(error => {
			console.log(error.message, 1500);
		});
	}


	send(event): void {
		event.preventDefault();
		this.addNewUser();
	}

	sendLogin(event): void{
		event.preventDefault();
		this.sucess = true
	}

	debug(): string {
		localStorage.setItem('registerInfos', JSON.stringify(this.user))
		return JSON.stringify(this.user);
	}

	visitor() {
		var code = prompt("Digite o código da sala: ");
	}
}
