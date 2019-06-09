import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as quoteData from '../../../assets/quotes.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: {title: string, checked: boolean, desc?: string}[] = [];
  reorder: boolean;
  quote: string;

  constructor(private storage: Storage) {
    // Set the quote.
    this.quote = quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)];

    // Try and read in tasks from storage.
    storage.get('data').then((res) => {
      if (res.length > 0) this.tasks = JSON.parse(res);
    });

    this.reorder = false;
  }

  ionViewDidEnter() {
    // Add new task if it exists.
    if (history.state.task != undefined) {
      this.tasks.push({
        title: history.state.task.title,
        checked: false,
        desc: history.state.task.desc
      });
    }

    this.saveTasks();
  }

  ngOnDestroy() {
    this.saveTasks();
  }

  // Delete a task from the list of tasks.
  // @params index: Index of the task in the array.
  onDelete(index): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
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

  // Save tasks to storage.
  saveTasks() {
    if (this.tasks.length > 0) {
      this.storage.set('data', JSON.stringify(this.tasks));
    }
  }
}