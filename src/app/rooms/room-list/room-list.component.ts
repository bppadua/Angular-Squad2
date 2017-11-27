import { User } from './../../users/shared/user.model';
import { Component, OnInit } from '@angular/core';
import { Room } from './../shared/room.model';
import { MaterialModule } from './../../shared/material/material.module';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public rooms : Room[] = new Array<Room>(); 
  mqAlias: string;
  constructor(    private media: ObservableMedia,
  ) { }
  
  ngOnInit() {
    this.mqAlias = this.media.isActive('xs') || this.media.isActive('sm') ? "sm" : "md";
    this.media.subscribe((change: MediaChange) => {
      this.mqAlias = change.mqAlias;
    });
    for(var i = 1; i < 10; i++){
      let teste = new Room()
      teste.identifier=i+'';
      teste.desc='sadasda';
      teste.name='Sala '+i; 
      this.rooms.push(teste);
    }
  }

}
