import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCard } from '../task-card/task-card';
import { Calendario } from '../calendario/calendario';

interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: 'Alta' | 'Media' | 'Baja';
}

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [CommonModule, TaskCard, Calendario], 
  templateUrl: './listado-tareas.html',
  styleUrls: ['./listado-tareas.css'],
})
export class ListadoTareas {
  tareasHoy: Task[] = [
  {
    title: 'Comprar víveres',
    description: 'Leche, pan, huevos',
    dueDate: '2026-01-20',
    priority: 'Alta'
  },
  {
    title: 'Estudiar Angular',
    description: 'Componentes y rutas',
    dueDate: '2026-01-20',
    priority: 'Media'
  }
  ];


  tareasToDo: Task[] = [
    {
      title: 'Comprar víveres',
      description: 'Leche, pan, huevos',
      dueDate: '2026-01-20',
      priority: 'Alta'
    },
  ];

  tareasDoing: Task[] = [
    {
      title: 'Estudiar Angular',
      description: 'Repasar componentes',
      dueDate: '2026-01-21',
      priority: 'Media'
    },
  ];

  tareasDone: Task[] = [
    {
      title: 'Enviar email',
      description: 'A Juan sobre el proyecto',
      dueDate: '2026-01-19',
      priority: 'Baja'
    },
  ];

}



