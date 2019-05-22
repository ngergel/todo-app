import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TaskComponent]
})
export class ComponentsModule { }
