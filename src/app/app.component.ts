import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'minimal';

  constructor() { }
  
  public loadScript(baseUrl: string, fileUrl: string) {
    let node = document.createElement('script');
    node.src = `${baseUrl}${fileUrl}`;
    node.setAttribute('relative-base-path', baseUrl);
    node.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(node);
}

  ngOnInit(): void {
    setTimeout(() => {
      this.loadScript("https://cdn.jsdelivr.net/gh/MTESSDev/utd-webcomponents@1.17.0/dist", "/js/utd-webcomponents.min.js");
    }, 1);
  }
}
