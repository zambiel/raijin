import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [NgClass],
  templateUrl: './row.html',
  styleUrl: './row.css',
})
export class Row implements OnInit {
  constructor(public translate: Translate) {}

  ngOnInit() {
    this.translate.loadSavedLanguage();
  }

  switchLang(lang: 'en' | 'es') {
    this.translate.setLanguage(lang);
  }

  linkDonate: string = 'https://www.kickstarter.com/projects/raijincarconversions/909231047?ref=8iztx4&token=ffef6273';
}
