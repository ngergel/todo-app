import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage {
  tasks: Task[];
  reorder: boolean;

  constructor(public toastCtrl: ToastController) {
    this.tasks = [
      new Task('Task 1', 'Really cool description.'),
      new Task('Task 2'),
      new Task('Task 3 really really really long title', 'Short description.'),
      new Task('Task 4', 'Really really really really long and super descriptive description.')
    ];

    this.reorder = false;
  }

  // Toast popup for testing.
  // @params msg: Message to write in the toast.
  async toast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  // Delete a task from the list of tasks.
  // @params index: Index of the task in the array.
  onDelete(index): void {
    this.tasks.splice(index, 1);
  }

  // Toggle reorder tasks mode.
  toggleReorder(): void {
    this.reorder = !this.reorder;
  }

  // Save item reordering.
  // @params event: ionItemReorder event.
  reorderItems(event) {
    let draggedItem = this.tasks.splice(event.detail.from, 1)[0];
    this.tasks.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
  }

  // Update check box.
  onCheck(event, id) {
    this.tasks[id].checked = event;
  }
}

class Task {
  title: string;
  desc: string;
  checked: boolean;

  constructor(title: string, desc?: string) {
    this.title = title;
    this.desc = desc;
    this.checked = false;
  }
}