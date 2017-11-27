import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../shared/room.model';
import {MaterialModule} from '../../shared/material/material.module';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  room: Room = new Room();
  constructor() { }

  ngOnInit() {
  }

}
