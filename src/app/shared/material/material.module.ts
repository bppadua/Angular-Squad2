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
<<<<<<< HEAD
	MatSidenavModule,
	MatExpansionModule
=======
	MatSidenavModule, 
>>>>>>> a10165486231947e15c076d77cdefbff6b0713f1
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
