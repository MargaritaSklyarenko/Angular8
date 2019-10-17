import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false})
  appTitle: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // зачем setTimeout?
    // желательно задействовать Renderer2, а не изменять свойства напрямую
    setTimeout(() => {
      this.appTitle.nativeElement.textContent = 'Shop';
    }, 0);
  }
}
