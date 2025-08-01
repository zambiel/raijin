import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Translate {
  private currentLang: 'en' | 'es' = 'en';

  private translations: Record<string, Record<string, string>> = {
    en: {
      // row
      help: 'You can help us to make the road cleaner.',
      donate: 'Donate here',
      // main menu
      goal: 'Goal',
      prototype: 'Seat 600',
      future: 'Future',
      story: 'Our Story',
      collaborate: 'Collaborate',
      country: 'Spain',
      nav: 'Navigation',
      priv: 'Privacy',
      social: 'Social',
      // buttons:
      contactBtn: 'Contact Us',
      donateBtn: 'Donate Now',
      aboutBtn: 'About Us',
      send: 'Send',
      // privacy menu:
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      // HERO:
      title: 'We Convert Classic Cars To Electric Vehicles',
      slogan: 'Classics are the future!',
      textHero:
        'We aim to give classic cars a second life with clean electric power so future generations have the opportunity to enjoy these cars!',
      // GOAL:
      titleGoal: 'Our Goal Is The Recycling and global wellbeing ',
      textGoal:
        'Our goal is to complete our first full prototype, build a functioning workshop, and begin designing a modular, open conversion platform and DIY kits that can one day work across many beloved classics—giving them a clean, modern soul without sacrificing their vintage spirit.',
      // PROTOTYPE:
      titlePrototype: 'Our Very First Prototype, The Classic Seat 600',
      how: 'How We Plan To Do It',
      infoPlan1:
        'We`re not starting from zero. We`ve already: Acquired and begun restoring a Porsche 944 donor vehicle (We plan to convert premium cars as well), researched compatible motor and battery systems & outlined a flexible battery/mount design that could apply to other cars',
      infoPlan2:
        'With this Kickstarter funding, we will: Design and install a complete EV drivetrain in the SEAT 600, using repurposed batteries and tested safety systems, prototype a modular mounting system that can be adapted to other vehicles & document every step in detailed guides, CAD files, and video, deliver limited rewards—including official merchandising, design documents, beta access to early kits, and full conversions to founding backers.',
      final:
        'And open a small workshop to continue offering conversions and eventually sell small-batch kits.',
      // FUTURE:
      titleFuture: 'In The Future',
      subtitleFuture: 'We want to collaborate with big companies',
      // STORY:
      titleStory: 'Our Story',
      textStory:
        'We’re Izumi and Laura—two makers with a shared obsession: reviving classic cars for a cleaner future. Izumi is a hands-on builder and lifelong car enthusiast who grew frustrated seeing beautiful machines scrapped due to outdated engines. Laura is a branding, marketing, and tech expert from a family of entrepreneurs. She joined Raijin because she believed in the mission—and because where Izumi brings mechanical vision, she brings structure, strategy, and digital firepower. Together, we’re building Raijin: clean, modular EV conversion kits that give iconic cars a second life, without losing their soul.',
      // COLLABORATE:
      titleCollaborate: 'Collaborate With Us!⚡️',
      textCollaborate: 'Leave Your Email Here:',
      inputEmail: 'your email',
      validationEmail1: 'Please, enter a valid email',
      validationEmail2: 'Email Saved Correctly!',
      // CONTACT:
      titleContact: 'Contact Us',
      name: 'Your Name',
      email: 'E-mail',
      phoneNumber: 'Phone Number',
      message: 'Message',
      sendBtn: 'Send Email',
      errorName: 'Please, enter your name',
      errorEmail: 'The email is not valid',
      errorEmail2: 'The email is required',
      errorPhone: 'Please, enter a valid phone number',
      errorMessage: 'Please, enter a message',
      success: 'Email sent successfully!',
    },
    es: {
      help: 'Puedes ayudarnos a tener la carretera más limpia.',
      donate: 'Dona aquí',
      // main menu:
      goal: 'Objetivo',
      prototype: 'Seat 600',
      future: 'Vista A Futuro',
      story: 'Nuestra historia',
      collaborate: 'Colabora',
      country: 'España',
      nav: 'Navegación',
      priv: 'Privacidad',
      social: 'Redes Sociales',
      // buttons:
      contactBtn: 'Contactar',
      donateBtn: 'Ayúdanos',
      aboutBtn: 'Acerca de Nosotros',
      send: 'Enviar',
      // privacy menu:
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      // HERO:
      title: 'Convertimos Coches Clásicos a Vehículos Eléctricos',
      slogan: 'Los Clásicos Son El Futuro',
      textHero:
        'Nuestro objetivo es dar a los coches clásicos una segunda vida con energía eléctrica limpia para que las generaciones futuras tengan la oportunidad de disfrutar de estos vehículos.',
      // GOAL
      titleGoal: 'Nuestra Meta es el Reciclaje y el Bienestar Global',
      textGoal:
        'Nuestra meta es completar nuestro primer prototipo completo, construir un taller que funcione y empezar a diseñar una plataforma de conversión modular y abierta, así como kits de conversión que algún día puedan funcionar con muchos clásicos queridos, dándoles un alma limpia y moderna sin sacrificar su espíritu vintage.',
      // PROTOTYPE
      titlePrototype: 'Nuestro Primer Prototipo, el Clásico Seat 600',
      how: 'Cómo Pensamos Hacerlo',
      infoPlan1:
        'No partimos de cero. Ya hemos: Adquirido y empezado a restaurar un vehículo donante Porsche 944 (planeamos convertir también coches de gama alta). Hemos investigado sistemas de motor y batería compatibles. Esbozado un diseño flexible de la batería / montaje que podría aplicarse a otros coches',
      infoPlan2:
        'Con esta financiación Kickstarter, vamos a: Diseñar e instalar un tren motriz EV completo en el SEAT 600, utilizando baterías reutilizadas y sistemas de seguridad probados. Crear un prototipo de sistema de montaje modular que pueda adaptarse a otros vehículos. Documentar cada paso en guías detalladas, archivos CAD y vídeo. Ofrecer recompensas limitadas, como merchandising oficial, documentos de diseño, acceso beta a los primeros kits y conversiones completas a los patrocinadores fundadores.',
      final:
        'Y abrir un pequeño taller para seguir ofreciendo conversiones y, con el tiempo, vender kits en pequeñas cantidades.',
      titleFuture: 'En El Futuro',
      subtitleFuture: 'Queremos colaborar con grandes compañías',
      // STORY
      titleStory: 'Nuestra Historia',
      textStory:
        'Somos Izumi y Laura—dos creadores con una obsesión compartida: devolver la vida a los coches clásicos con un futuro más limpio. Izumi es un apasionado de la mecánica y los coches de toda la vida, frustrado al ver joyas automovilísticas desguazadas solo por tener motores obsoletos. Laura es experta en branding, marketing y tecnología, y viene de una familia de emprendedores. Se unió a Raijin porque cree en la misión—y porque donde Izumi aporta visión mecánica, ella aporta estrategia, estructura y potencia digital. Juntos, estamos construyendo Raijin: kits de conversión eléctrica modulares que dan una nueva vida a los clásicos, sin que pierdan su alma.',
      titleCollaborate: 'Colabora Con Nosotros!⚡️',
      textCollaborate: 'Deja tu correo electrónico aquí:',
      inputEmail: 'tu correo electrónico',
      validationEmail1: 'Por favor, Introduce un email válido',
      validationEmail2: '¡Gracias! Tu Email ha sido registrado correctamente!',
      // CONTACT:
      titleContact: 'Contacta Con Nosotros',
      name: 'Tu Nombre',
      email: 'E-mail',
      phoneNumber: 'Número de Teléfono',
      message: 'Mensaje',
      sendBtn: 'Enviar Email',
      errorName: 'El nombre es obligatorio.',
      errorEmail: 'El email no es válido',
      errorEmail2: 'El email es obligatorio.',
      errorPhone: 'Escribe un número de teléfono válido',
      errorMessage: 'El mensaje es obligatorio.',
      success: '¡Mensaje enviado con éxito!',
    },
  };

  setLanguage(lang: 'en' | 'es') {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
  }

  getLanguage() {
    return this.currentLang;
  }

  translate(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }

  loadSavedLanguage() {
    const saved = localStorage.getItem('language') as 'en' | 'es';
    if (saved) this.currentLang = saved;
  }

  // link
  linkDonate: string =
    'https://www.kickstarter.com/projects/raijincarconversions/909231047?ref=8iztx4&token=ffef6273';
}
