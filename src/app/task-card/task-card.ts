
import { Component, Input } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html',
  styleUrls: ['./task-card.css']
})
export class TaskCard {
  @Input() tarea!: Task;
}
