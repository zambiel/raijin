import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';

@Component({
  selector: 'app-goal',
  imports: [],
  templateUrl: './goal.html',
  styleUrl: './goal.css'
})
export class Goal implements OnInit {
      constructor(public translate: Translate) {}

      ngOnInit() {
        this.translate.loadSavedLanguage();
      }

      switchLang(lang: 'en' | 'es') {
        this.translate.setLanguage(lang);
      }
}
