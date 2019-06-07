import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // Input data.
  @Input() data: {title: string, checked: boolean, desc?: string};

  // Delete event.
  @Output() deleted = new EventEmitter();

  // Task variables.
  showDesc: boolean;
  hideDesc: boolean;
  
  constructor() {
    this.showDesc = false;
    this.hideDesc = false;
  }

  ngOnInit() {
    // Handle no description.
    if (this.data.desc === undefined || this.data.desc.length === 0) this.hideDesc = true;
  }

  // Reveal the description for the task.
  revealDesc(): void {
    if (!this.hideDesc) this.showDesc = !this.showDesc;
  }

  // Toggle checked or not.
  check(): void {
    this.data.checked = !this.data.checked;
  }

  // Emit an event indicating that this task was deleted.
  deleteTask() {
    this.deleted.emit();
  }
}
