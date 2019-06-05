import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TaskComponent } from '../components/task/task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage {
  tasks: TaskComponent[];
  reorder: boolean;

  constructor(public toastCtrl: ToastController, public task: TaskComponent) {
    this.tasks = [
      new TaskComponent('Task 1', false, 'Really cool description.'),
      new TaskComponent('Task 2', false),
      new TaskComponent('Task 3 really really really long title', false, 'Short description.'),
      new TaskComponent('Task 4', false, 'Really really really really long and super descriptive description.')
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
}