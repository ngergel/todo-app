import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: {title: string, checked: boolean, desc?: string}[];
  reorder: boolean;

  constructor(public toastCtrl: ToastController) {
    this.tasks = [
      {title: 'Task 1', checked: false, desc: 'Really cool description.'},
      {title: 'Task 2', checked: false},
      {title: 'Task 3: Long title', checked: false, desc: 'Really cool and long description that is of a significant length.'},
      {title: 'Task 4: Significantly longer title that is way too long to be honest.', checked: false, desc: 'Really cool description my guy.'},
      {title: 'Task 5', checked: true, desc: 'Starts out clicked.'}
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