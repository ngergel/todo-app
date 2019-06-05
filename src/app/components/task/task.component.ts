import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // Delete event.
  @Output() deleted = new EventEmitter();

  // Task variables.
  showDesc: boolean;
  hideDesc: boolean;
  checked: boolean;

  title: string;
  desc: string;
  
  constructor(title: string, checked: boolean, desc?: string, ) {
    this.showDesc = false;
    this.hideDesc = false;
    this.title = title;
    this.checked = checked;
    this.desc = desc;
  }

  ngOnInit() {
    // Handle no title/description.
    if (this.title === undefined) this.title = "No title";
    if (this.desc === undefined || this.desc.length === 0) this.hideDesc = true;
  }

  // Reveal the description for the task.
  revealDesc(): void {
    if (!this.hideDesc) this.showDesc = !this.showDesc;
  }

  // Toggle checked or not.
  check(): void {
    this.checked = !this.checked;
  }

  // Emit an event indicating that this task was deleted.
  deleteTask() {
    this.deleted.emit();
  }
}
