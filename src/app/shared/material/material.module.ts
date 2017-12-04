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
	MatSidenavModule,
	MatExpansionModule
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
		MatSidenavModule,
		MatExpansionModule
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
		MatSidenavModule,
		MatExpansionModule
	]
})
export class MaterialModule { }
