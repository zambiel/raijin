import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-future',
  imports: [CommonModule],
  templateUrl: './future.html',
  styleUrl: './future.css'
})
export class Future implements OnInit {

      constructor(public translate: Translate) {}

      ngOnInit() {
        this.translate.loadSavedLanguage();
      }

      switchLang(lang: 'en' | 'es') {
        this.translate.setLanguage(lang);
      }


  brands: string[] = ['Toyota', 'Ford', 'Tesla', 'Volskwagen', 'Honda', 'Nissan', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Audi', 'Kia']


}
