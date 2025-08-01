import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';


@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History implements OnInit {

      constructor(public translate: Translate) {}

      ngOnInit() {
        this.translate.loadSavedLanguage();
      }

      switchLang(lang: 'en' | 'es') {
        this.translate.setLanguage(lang);
      }

}
