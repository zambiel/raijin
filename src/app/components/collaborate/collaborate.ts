import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collaborate',
  imports: [FormsModule, CommonModule],
  templateUrl: './collaborate.html',
  styleUrl: './collaborate.css',
})
export class Collaborate implements OnInit {
  constructor(public translate: Translate) {}

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
      this.emailList.push(this.emailInput);
      this.emailSaved = true;
      this.invalidEmail = false;

      // Aquí es donde luego conectarás con Firebase:
      // this.firebaseService.saveEmail(this.emailInput);

      this.emailInput = '';
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
