import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
    constructor(public translate: Translate) {}

    ngOnInit() {
      this.translate.loadSavedLanguage();
      this.translate.linkDonate;
    }

    switchLang(lang: 'en' | 'es') {
      this.translate.setLanguage(lang);
    }

}
