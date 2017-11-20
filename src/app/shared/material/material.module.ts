import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatIconModule,
	MatButtonModule,
	MatDialogModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatSelectModule,
	MatTabsModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatTabsModule
	],
	exports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatTabsModule
	]
})
export class MaterialModule { }
