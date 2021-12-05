import { Component, OnInit, VERSION } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  ang_Ver = 'Angular version '+ VERSION.full + ' is runs on this client'; 
  constructor() { }

  ngOnInit(): void {
  }

}
