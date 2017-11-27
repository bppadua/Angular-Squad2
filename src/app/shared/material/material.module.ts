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
	MatListModule,
	MatFormFieldModule,
	MatInputModule,
	MatSidenavModule
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
		MatListModule,
		MatFormFieldModule,
		MatInputModule, 
		MatSidenavModule
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
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		MatSidenavModule
	]
})
export class MaterialModule { }
