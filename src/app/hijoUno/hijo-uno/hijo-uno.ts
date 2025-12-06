import { Component, signal, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.html',
  styleUrl: './hijo-uno.scss',
  standalone: true,
  imports: [CommonModule]
})
export class HijoUno implements OnInit, OnDestroy {
  @Output() cambiarSeccion = new EventEmitter<string>();
  
  seleccionado = signal<string>('home');
  private subscription: Subscription | null = null;

  opciones = [
    { 
      id: 'home', 
      label: 'Home',
      img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z%22/%3E%3C/svg%3E'
    },
    { 
      id: 'buscar', 
      label: 'Search',
      img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22/%3E%3C/svg%3E'
    },
    { 
      id: 'html', 
      label: 'HTML',
      img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z%22/%3E%3C/svg%3E'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateSeleccionado();
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSeleccionado();
      });
  }

  private updateSeleccionado() {
    const url = this.router.url;
    if (url.includes('buscar')) {
      this.seleccionado.set('buscar');
    } else if (url.includes('html')) {
      this.seleccionado.set('html');
    } else {
      this.seleccionado.set('home');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  seleccionar(id: string) {
    this.router.navigate([`/${id}`]);
    this.cambiarSeccion.emit(id);
  }
}
