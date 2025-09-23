import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// // Ajusta --vh para móviles. Ejecutar en load y resize.
// const setVh = () => {
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
// };
// setVh();
// window.addEventListener('resize', setVh);
// // Ajusta --vh para móviles. Ejecutar en load y resize.
