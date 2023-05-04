import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  lang: any;

  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLanguage(event: any) {
    localStorage.setItem('lang', (event.target as HTMLInputElement).value);
    window.location.reload();
  }
}
