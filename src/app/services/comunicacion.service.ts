import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  // Esta es la "señal" que va a enviar datos entre los hijos
  private mensajeSource = new Subject<string>();

  // Esto es lo que los componentes escuchan
  mensaje$ = this.mensajeSource.asObservable();

  constructor() {}

  // Método para enviar info desde hijoUno → hijoDos o viceversa
  enviarMensaje(mensaje: string) {
    this.mensajeSource.next(mensaje);
  }
}
