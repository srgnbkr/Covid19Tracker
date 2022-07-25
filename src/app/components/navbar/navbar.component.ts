import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Anasayfa',
        icon: 'pi pi-home',

        routerLink: ['/'],

      },
      {
        label: 'Ülkeler',
        icon: 'pi pi-flag-fill',
        routerLink: ['/ülkeler'],
      },
      {
        label: 'Covid19 Haberleri',
        icon: 'pi pi-globe',
        routerLink:['haberler']
      },
    ];
  }
}
