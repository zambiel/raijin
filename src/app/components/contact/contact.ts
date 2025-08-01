import { Component, OnInit } from '@angular/core';
import { Translate } from '../../services/translate';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  formulario: FormGroup;
  enviado: boolean = false;

  constructor(
    public translate: Translate,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.formulario = this.fb.group({
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

  enviar() {
    this.enviado = true;

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.entries(this.formulario.value).forEach(([key, value]) => {
      formData.append(key, String(value ?? ''));
    });

    this.http
      .post('https://raijincarconversions.com/api/guardar.php', formData, {
        responseType: 'text',
      })
      .subscribe({
        next: () => {
          alert('Formulario enviado correctamente');
          console.log('Formulario enviado:', this.formulario.value);
          this.formulario.reset();
          this.enviado = false;

          // Ocultar mensaje después de 5 segundos
          setTimeout(() => {
            this.enviado = false;
          }, 5000);
        },
        error: () => {
          alert('Error al enviar el formulario');
        },
      });
  }
}
