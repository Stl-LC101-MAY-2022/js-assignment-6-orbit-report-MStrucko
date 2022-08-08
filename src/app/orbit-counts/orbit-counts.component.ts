import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	/* Bonus 2b Note to Self: Had to add this line below to create a types array to link to my *ngFor="let type of types" 
	loop in the orbit-counts.component.html file to actually display the {{type}} counts. */
	types: string[] = ['Communication', 'Positioning', 'Probe', 'Space Debris', 'Space Station', 'Telescope'];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }


}