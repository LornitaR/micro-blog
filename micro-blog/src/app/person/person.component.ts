import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = {
    id:1,
    name:'Lorna',
    email: 'lorna@example.com',
    blogs: null
  };
  constructor() { }

  ngOnInit() {
  }

}
