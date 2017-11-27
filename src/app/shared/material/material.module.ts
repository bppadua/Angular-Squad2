import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatIconModule,
	MatButtonModule,
	MatDialogModule,
	MatToolbarModule,
	MatCardModule,
	MatSelectModule,
	MatTabsModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatCardModule,
		MatSelectModule,
		MatTabsModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatCardModule,
		MatSelectModule,
		MatTabsModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule { }
