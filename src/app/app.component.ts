import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';

  bgcolor: string= 'purple';


  images: string[]= ['/assets/1.jpeg','/assets/2.jpeg','/assets/3.jpeg','/assets/4.jpeg','/assets/5.jpeg']
}
