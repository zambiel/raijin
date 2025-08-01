import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';

@Component({
  selector: 'app-prototype',
  imports: [],
  templateUrl: './prototype.html',
  styleUrl: './prototype.css'
})
export class Prototype implements OnInit {
      constructor(public translate: Translate) {}

      ngOnInit() {
        this.translate.loadSavedLanguage();
      }

      switchLang(lang: 'en' | 'es') {
        this.translate.setLanguage(lang);
      }
}
