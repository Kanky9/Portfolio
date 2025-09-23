import { Component } from '@angular/core';
import { ProjectItem } from '../../Interfaces/projectItem.interfaces';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  project: ProjectItem[] = [
    {
      title: 'Melosa Bar',
      description:
        'Carta digital para Melosa Bar. La carta permite a los clientes ver el menú completo, incluyendo bebidas y comidas, con descripciones y precios detallados. Además, cuenta con un pánel administrador para que los dueños administren los productos.',
      img: '../../../assets/img/portfolio/melosaBar.png',
      url: 'https://melosa-77d77.web.app',
    },

    {
      title: 'World AI',
      description:
        'World AI es una plataforma web que ofrece una variedad de herramientas y recursos impulsados por inteligencia artificial para facilitar diversas tareas y mejorar la productividad de los usuarios.',
      img: '../../../assets/img/portfolio/worldAi.png',
      url: 'https://world-ai.vercel.app',
    },

    {
      title: 'Kanky Store',
      description:
        'En Kanky Store vas a encontrar un catálogo de ropa, con informacion y precio del producto, tambien cuenta con filtros, buscador y un redireccionamiento a WhatsApp con el nombre del producto que le interese al usuario.',
      img: '../../../assets/img/portfolio/kankyStore.png',
      url: 'https://kanky-store.vercel.app',
    },

    {
      title: 'Del Lauti',
      description:
        'Del Lauti es una página web que presenta toda la información sobre el peluquero y supeluquería, con un turnero online agregado que permite a los clientes reservar sus turnos de forma rápida y sencilla para sus servicios.',
      img: '../../../assets/img/portfolio/peluDelLauti.png',
      url: 'https://dellauti-5413f.web.app/home',
    },

    {
      title: 'Fix',
      description:
        'Fix es una aplicación multiplataforma diseñada para ofrecer información de manera rápida y accesible sobre temas de interés como salud, alimentos, compras, y más. Con un enfoque en simplificar el acceso a datos útiles, actualmente opera en la zona de Venado Tuerto.',
      img: '../../../assets/img/portfolio/fix.png',
      url: 'https://fixvt.app/home',
    },
  ];
}
