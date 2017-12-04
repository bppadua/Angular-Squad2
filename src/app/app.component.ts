import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	lang: string = 'pt';
	items: Observable<any[]>;
	
	constructor(
		public translate: TranslateService,
		public db: AngularFirestore
	) {
		translate.addLangs(['en', 'pt']);
		translate.setDefaultLang('pt');
		this.refreshSystemLanguage();
		this.items = db.collection('items').valueChanges();
		
	}

	ngOnInit() {
	}

	refreshSystemLanguage() {
		this.lang = (localStorage.getItem('preferedLang') ? localStorage.getItem('preferedLang') : this.translate.getBrowserLang());
		this.translate.use(this.lang.match(/en|pt/) ? this.lang : 'pt');
	}
}
