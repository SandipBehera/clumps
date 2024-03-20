import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: APIService, private router: Router) { }
  @Input() logo = ""
  ngOnInit(): void {
  }
  logout() {
    if (this.apiService.logout()) {
      window.alert("Admin logged out!");
      this.router.navigate(['/admin']);
    }
  }


}
