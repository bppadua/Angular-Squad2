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
		private app: AppComponent
	) { }

	ngOnInit() {
		this.app.refreshSystemLanguage();
	}

	login() {
		debugger;
		//console.log(localStorage.getItem('registerInfos'));
		var userData = JSON.parse(localStorage.getItem('registerInfos'));
		if (this.userEmail == userData.email && this.userPassword == userData.password){
			this.router.navigate(['']);			
		} else {
			alert('Email e/ou senha incorretos');
		}
		//localStorage.setItem('currentUser', 'you'); 
		//this.router.navigate(['']);
	}

	send(event): void {
		event.preventDefault();
		this.sucess = true;
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
