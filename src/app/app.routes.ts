import { Routes } from '@angular/router';
import { ListadoTareas } from './listado-tareas/listado-tareas';
import { CrearTarea } from './crear-tarea/crear-tarea';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: ListadoTareas },
  { path: 'nueva-tarea', component: CrearTarea },
];

