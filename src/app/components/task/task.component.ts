import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // Input from page.
  @Input() title: string;
  @Input() desc: string;
  @Input() checked: boolean;

  // Delete event.
  @Output() deleted = new EventEmitter();
  @Output() checkedBox = new EventEmitter<boolean>();

  // Task variables.
  showDesc: boolean;
  hideDesc: boolean;

  constructor() {
    this.showDesc = false;
    this.hideDesc = false;
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
    this.checkedBox.emit(this.checked);
  }

  // Emit an event indicating that this task was deleted.
  deleteTask() {
    this.deleted.emit();
  }
}