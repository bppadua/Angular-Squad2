import { RoomsModule } from './../../rooms/rooms.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './layout.component';
import { AnswersModule } from '../../answers/answers.module';

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		TranslateModule,
		RoomsModule,
		AnswersModule
	],
	declarations: [
		LayoutComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
