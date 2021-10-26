import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Contact Number', cols: 1, rows: 1 },
          { title: 'Personal Gmail Account', cols: 1, rows: 1 },
          { title: 'School Gmail Account', cols: 1, rows: 1 },
          { title: 'Facebook Account', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Contact Number', cols: 2, rows: 1 },
        { title: 'Personal Gmail Account', cols: 1, rows: 2 },
        { title: 'School Gmail Account', cols: 1, rows: 2 },
        { title: 'Facebook Account', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
