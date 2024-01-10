import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private translateService: TranslateService) {
  }
  changeLanguage() {
    if (this.translateService.currentLang == 'tr') {
      this.translateService.use("en")
    }
    else {
      this.translateService.use("tr")
    }
  }
}