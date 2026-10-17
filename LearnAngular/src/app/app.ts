import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Note } from './models/note.model';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { NoteService } from './sevices/note';

@Component({
  selector: 'app-root',
  // ДОДАНО FormsModule сюди:
  imports: [RouterOutlet, DatePipe, Header, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private noteService: NoteService) {}

  handleSubscribe() {
    console.log("QWERTY");
  }

  showAlert(){
    alert("check users");
  }

  title = "Hello My First website";

  protected get notes(){
    return this.noteService.getNotes();
  }

  // Зробили звичайним об'єктом, щоб ngModel міг записувати туди дані
  protected newNote: Partial<Note> = {
    title: '',
    content: ''
  };

  protected addNote() {
    // Звертаємося напряму до this.newNote без круглих дужок
    if (!this.newNote.title || !this.newNote.content) {
      return; 
    }

    this.noteService.addNote(this.newNote.title, this.newNote.content);

    // Очищаємо форму
    this.newNote = {
      title: "",
      content: ""
    };
  }
}