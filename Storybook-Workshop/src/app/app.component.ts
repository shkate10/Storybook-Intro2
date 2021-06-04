import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Storybook-Workshop';

  // tslint:disable-next-line:typedef
  handleClick() {
    window.alert('Clicked Button');
  }
}
