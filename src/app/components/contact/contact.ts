import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm: FormGroup;
  enviadoConExito = false;

  constructor(public translate: Translate, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      mensaje: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.translate.loadSavedLanguage();
  }

  switchLang(lang: 'en' | 'es') {
    this.translate.setLanguage(lang);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.contactForm.reset();
      this.enviadoConExito = true;

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.enviadoConExito = false;
      }, 5000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
