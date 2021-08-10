import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-nav-bar',
  templateUrl: './site-nav-bar.component.html',
  styleUrls: ['./site-nav-bar.component.css']
})
export class SiteNavBarComponent implements OnInit {

  isDarkMode=true
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Switch modes
   */
  switchMode() {
    this.isDarkMode = !this.isDarkMode;
  }

}
