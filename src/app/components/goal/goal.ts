import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-goal',
  imports: [RouterLink],
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
