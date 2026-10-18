import { Component } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../sevices/note';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private noteService: NoteService) {}

  protected newNote: Partial<Note> = {
    title: '',
    content: ''
  };

  protected submitted = false;

  protected addNote(form: NgForm) {
    this.submitted = true;

    if (form.invalid) return;

    if (!this.newNote.title || !this.newNote.content) {
      return; 
    }

    this.noteService.addNote(this.newNote.title, this.newNote.content);

    this.newNote = {
      title: "",
      content: ""
    };

    form.resetForm();
    this.submitted = false;
  }
}