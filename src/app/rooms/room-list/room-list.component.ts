import { Component, OnInit } from '@angular/core';
import { Room } from './../shared/room.model';
import { MaterialModule } from './../../shared/material/material.module';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public rooms : Room[] = new Array<Room>(); 
  private room : Room = new Room();
  constructor() { }

  ngOnInit() {
    for(var i = 1; i< 10; i++){
      this.room.identifier=i+'';
      this.room.desc='sadasda';
      this.room.name='Sala '+i; 
      this.rooms.push(this.room);
    }
  }

}
