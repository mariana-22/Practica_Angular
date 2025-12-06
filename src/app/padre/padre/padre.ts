import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { HijoUno } from '../../hijoUno/hijo-uno/hijo-uno';
import { HijoDos } from '../../hijoDos/hijo-dos/hijo-dos';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.html',
  styleUrls: ['./padre.scss'],
  standalone: true,
  imports: [CommonModule, HijoUno, HijoDos]
})
export class PadreComponent implements OnInit, OnDestroy {
  seccionSeleccionada = signal<string>('home');
  private subscription: Subscription | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateSeccion();
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSeccion();
      });
  }

  private updateSeccion() {
    const url = this.router.url;
    if (url.includes('buscar')) {
      this.seccionSeleccionada.set('buscar');
    } else if (url.includes('html')) {
      this.seccionSeleccionada.set('html');
    } else {
      this.seccionSeleccionada.set('home');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  cambiarSeccion(seccion: string) {
    this.seccionSeleccionada.set(seccion);
  }
}
