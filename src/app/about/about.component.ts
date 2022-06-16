import { Component, OnInit } from '@angular/core';
import {Data} from "../types";
import {myData} from "../data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: Data[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = myData
  }

}
