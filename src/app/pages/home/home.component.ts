import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any;
  needle:any;
  
  constructor() { }

  ngOnInit(): void {
    // this.Gauge(document.getElementById("gauge"))value(0.25);
    this.init();
  }

  init() {
    let element:any = document.getElementById("gauge");
    this.data = element.querySelector(".gauge__data");
    this.needle = element.querySelector(".gauge__needle");

    var turns = -0.5 + (0.25 * 0.5);
    this.data.style.transform = "rotate(" + turns + "turn)";
    this.needle.style.transform = "rotate(" + turns + "turn)";
  }

}






