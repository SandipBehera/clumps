import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { 
    this.loadJsFile("../../assets/frontent_files/js/main.js"); 
  }
  loadJsFile(url: any): void {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          nav: true,
          items: 1,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false,
          autoplay: true,
        });
      });
    })(jQuery);
  }
}
