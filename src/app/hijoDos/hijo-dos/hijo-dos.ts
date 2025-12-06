import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.html',
  styleUrl: './hijo-dos.scss',
  standalone: true,
  imports: [CommonModule, NgFor]
})
export class HijoDos {
  @Input() set seccion(value: string) {
    this.seccionSignal.set(value);
    this.opcionSeleccionada.set(null);
  }

  private seccionSignal = signal<string>('home');
  opcionSeleccionada = signal<any>(null);

  constructor(private router: Router) {}

  secciones = {
    home: {
      titulo: 'Home',
      listaOpciones: [
        { nombre: 'Sena presentation', descripcion: 'Presentación oficial del SENA con información general' },
        { nombre: 'Ficha 3065474', descripcion: 'Código de ficha de formación profesional' },
        { nombre: 'Sexta opcion', descripcion: 'Información adicional' }
      ],
      descripcion: 'El SENA (Servicio Nacional de Aprendizaje) es una entidad publica colombiana que se encarga de invertir en el desarrollo social y tecnico de los trabajadores colombianos a traves de programas de formacion profesional integral. Su objetivo es aumentar la competitividad del pais, generar empleo y apoyar el emprendimiento, funcionando en alianza entre gobierno, empresarios y trabajadores.'
    },
    buscar: {
      titulo: 'Search',
      listaOpciones: [
        { nombre: 'Search', descripcion: 'Funcionalidad de búsqueda en la plataforma' },
        { nombre: 'Sexta opcion', descripcion: 'Otras opciones de búsqueda' }
      ],
      descripcion: 'El SENA (Servicio Nacional de Aprendizaje) es una entidad publica colombiana que se encarga de invertir en el desarrollo social y tecnico de los trabajadores colombianos a traves de programas de formacion profesional integral. Su objetivo es aumentar la competitividad del pais, generar empleo y apoyar el emprendimiento, funcionando en alianza entre gobierno, empresarios y trabajadores.'
    },
    html: {
      titulo: 'HTML',
      listaOpciones: [
        { nombre: 'Introduccion', descripcion: 'Conceptos básicos de HTML y su importancia en el desarrollo web' },
        { nombre: 'Etiquetas', descripcion: 'Aprende todas las etiquetas HTML disponibles y cómo utilizarlas' },
        { nombre: 'Atributos', descripcion: 'Guía completa de atributos HTML para cada etiqueta' }
      ],
      descripcion: 'El SENA (Servicio Nacional de Aprendizaje) es una entidad publica colombiana que se encarga de invertir en el desarrollo social y tecnico de los trabajadores colombianos a traves de programas de formacion profesional integral. Su objetivo es aumentar la competitividad del pais, generar empleo y apoyar el emprendimiento, funcionando en alianza entre gobierno, empresarios y trabajadores.'
    }
  };

  seccionActual = computed(() => {
    const seccion = this.seccionSignal();
    return this.secciones[seccion as keyof typeof this.secciones] || this.secciones.home;
  });

  seleccionarOpcion(opcion: any) {
    this.opcionSeleccionada.set(opcion);
    const seccion = this.seccionSignal();
    const nombreOpcion = opcion.nombre.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate([`/${seccion}/${nombreOpcion}`]);
  }
}
