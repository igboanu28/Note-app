import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteServiceService } from '../Services/note-service.service';

@Component({
  selector: 'app-note-app',
  templateUrl: './note-app.component.html',
  styleUrl: './note-app.component.css'
})
export class NoteAppComponent {
  constructor(private noteService: NoteServiceService) {}

  title!:string
  content!:string

  errors: any = [];

  onSubmit(noteForm: NgForm) {

    var inputData = {
      title: this.title,
      content: this.content
    }

    this.noteService.onSubmit(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response')
      },
      error: (err: any) => {
        this.errors = err.error;
        console.log(err.error, 'errors')
      }
    });

  }
}

