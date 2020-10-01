import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  cols: number;
  rows: number;
  text: string;
}

const showElement = {
  myelement: false
}

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css']
})
export class GridlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: "FOR MEN'S", cols: 1, rows: 2, image: '../../assets/imgbox-1.jpg'},
    {text: "FOR KID'S", cols: 1, rows: 1, image: '../../assets/imgbox-2.jpg'},
    {text: "FOR WOMEN'S", cols: 1, rows: 2, image: '../../assets/imgbox-3.jpg'},
    {text: "ACCESSORIES", cols: 1, rows: 1, image: '../../assets/imgbox-4.jpg'},
  ];

  showElement = showElement;

  toggleElement () {
    showElement.myelement = !showElement.myelement;
  }
}

