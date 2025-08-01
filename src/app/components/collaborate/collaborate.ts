import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collaborate',
  imports: [FormsModule, CommonModule],
  templateUrl: './collaborate.html',
  styleUrl: './collaborate.css',
})
export class Collaborate implements OnInit {
  constructor(public translate: Translate, private http: HttpClient) {}

  ngOnInit() {
    this.translate.loadSavedLanguage();
  }

  switchLang(lang: 'en' | 'es') {
    this.translate.setLanguage(lang);
  }
  emailInput: string = '';
  emailList: string[] = [];

  emailSaved = false;
  invalidEmail = false;

  submitEmail() {
    if (this.validateEmail(this.emailInput)) {
      const body = { email: this.emailInput };

      this.http
        .post('https://raijincarconversions.com/api/save_email.php', body)
        .subscribe({
          next: () => {
            this.emailSaved = true;
            this.invalidEmail = false;
            this.emailInput = '';
          },
          error: (err) => {
            console.error('Error al guardar el email:', err);
            this.invalidEmail = true;
            this.emailSaved = false;
          },
        });
    } else {
      this.invalidEmail = true;
      this.emailSaved = false;
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
