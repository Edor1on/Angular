import { Component } from '@angular/core';
import { NoteService } from '../../sevices/note';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteAdd } from '../../components/note-add/note-add';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NoteAdd],
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
}