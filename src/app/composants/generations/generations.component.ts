import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations = [
    'GÉNÉRATIONS I',
    'GÉNÉRATIONS II',
    'GÉNÉRATIONS III',
    'GÉNÉRATIONS IV',
    'GÉNÉRATIONS V',
    'GÉNÉRATIONS VII'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
