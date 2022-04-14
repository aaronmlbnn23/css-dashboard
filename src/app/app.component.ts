import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() { }

  ngOnInit(): void {
    let btn = document.querySelector('#toggleBtn');
    let sidebar = document.querySelector('.sidebar');

    btn?.addEventListener('click', function () {
      sidebar?.classList.toggle('active');
    });
  }
 
}

