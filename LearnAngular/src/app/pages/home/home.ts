import { Component, signal } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../sevices/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private noteService: NoteService) {}

  showAlert(){
    alert("check users");
  }

  protected get notes(){
    return this.noteService.getNotes();
  }

  protected newNote: Partial<Note> = {
    title: '',
    content: ''
  };

  protected addNote() {
    if (!this.newNote.title || !this.newNote.content) {
      return; 
    }

    this.noteService.addNote(this.newNote.title, this.newNote.content);

    this.newNote = {
      title: "",
      content: ""
    };
  }
}
