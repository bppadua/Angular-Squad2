import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../shared/room.model';
import {MaterialModule} from '../../shared/material/material.module';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  name: string;
  description: string;
  room: Room = new Room();
  constructor() { }

  ngOnInit() {
  }
  
  register(event){
    event.preventDefault();
    this.room.identifier = "1234";
    this.room.name = this.name;
    this.room.desc=this.description;
    this.room.isActive = true;
    if(!localStorage.getItem("rooms")){
      localStorage.setItem("rooms","[]");
    }
    let arr = JSON.parse(localStorage.getItem("rooms"));
    arr.push(this.room);
    localStorage.setItem("rooms",JSON.stringify(arr));
  }
}
