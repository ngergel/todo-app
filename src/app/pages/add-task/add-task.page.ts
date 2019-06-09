import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  // Task form.
  public taskForm: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder) {
    // Iniitialize task creation form.
    this.taskForm = formBuilder.group({
      title: ['', Validators.required],
      desc: ['']
  });
  }

  ngOnInit() { }

  // Create task function and return to home page.
  createTask() {
    // Cancel if form is invalid.
    if (this.taskForm.invalid) return;

    this.router.navigateByUrl("/home", {
      state: {task: this.taskForm.value}
    });
  }
}
