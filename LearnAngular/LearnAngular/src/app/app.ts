import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Note } from './models/note.model';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // ДОДАНО FormsModule сюди:
  imports: [RouterOutlet, DatePipe, Header, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleSubscribe() {
    console.log("QWERTY");
  }

  showAlert(){
    alert("check users");
  }

  title = "Hello My First website";
  
  protected readonly notes = signal<Note[]>([
    { id: 1, title: "Adrian", content: "19 year", createdAt: new Date() },
    { id: 2, title: "Yura", content: "19 year", createdAt: new Date() }
  ]);

  // Зробили звичайним об'єктом, щоб ngModel міг записувати туди дані
  protected newNote: Partial<Note> = {
    title: '',
    content: ''
  };

  protected addNote() {
    // ВИПРАВЛЕНО логіку: якщо немає title АБО немає content
    if(!this.newNote.title || !this.newNote.content){
      return; 
    }

    const noteToAdd: Note = {
      id: Date.now(),
      title: this.newNote.title,
      content: this.newNote.content,
      createdAt: new Date()
    };

    this.notes.update(notes => [...notes, noteToAdd]);

    // Очищаємо форму
    this.newNote = {
      title: "",
      content: ""
    };
  }
}