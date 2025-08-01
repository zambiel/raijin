import { Component, OnInit } from '@angular/core';
import { Row } from "../row/row";
import { Goal } from "../goal/goal";
import { Prototype } from "../prototype/prototype";
import { Future } from "../future/future";
import { History } from '../history/history';
import { Collaborate } from "../collaborate/collaborate";
import { Hero } from "../hero/hero";
import { Translate } from '../../services/translate';
import { CommonModule } from '@angular/common';
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Row, Goal, Prototype, Future, History, Collaborate, Hero, CommonModule, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(public translate: Translate) {}

  ngOnInit() {
    this.translate.loadSavedLanguage();
  }

  switchLang(lang: 'en' | 'es') {
    this.translate.setLanguage(lang);
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
