import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomComponent } from './room/room.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule, MaterialModule, FlexLayoutModule 
  ],
  declarations: [RoomListComponent, RoomComponent],
  exports: [RoomListComponent]
})
export class RoomsModule { }
