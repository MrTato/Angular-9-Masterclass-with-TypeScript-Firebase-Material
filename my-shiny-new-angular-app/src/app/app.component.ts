import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  // template: `
  // <h1>This is the Markup for the App Component</h1>
  // <p>This is a paragraph</p>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', `./app1.component.scss`],
  styles: [`
    p {
      color: blue;
    }
  `],
  // providers: [ DataService ]
})
export class AppComponent {
  title = "Angular";
  counter = 0;
  classToSet = 'positive';

  onCounterChange(buttonType: string) {
    buttonType == 'INC' ? this.counter++ : this.counter--;
    this.classToSet = this.counter > 0 ? 'positive' : 'negative';
  }
}
