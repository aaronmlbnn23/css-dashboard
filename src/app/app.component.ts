import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() { }
  
  isResized: boolean | undefined;
 
  ngOnInit(): void {
  
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

     

     let btn = document.querySelector('#toggleBtn');
     let sidebar = document.querySelector('.sidebar');

      window.addEventListener('resize', () => {
         this.isResized = true;
         let newWidth  = (window.innerWidth > 0) ? window.innerWidth : screen.width;
         width = newWidth; 
         console.log(width);
        
      });

   
        btn?.addEventListener('click', function () {
          sidebar?.classList.toggle('close');
    
        });

  }
 
}

