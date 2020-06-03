import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  count(type:string) {
    let amt = 0;
    for(let satellite of this.satellites) {
      if(satellite.type.toLocaleLowerCase() === type.toLocaleLowerCase()){
        amt ++;
      }
    }
    return amt
  }
}
