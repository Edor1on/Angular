import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Note } from './models/note.model';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleSubscribe() {
    console.log("QWERTY");
    alert("My penis");
    
  }

  protected readonly notes = signal<Note[]>([
    {
      id: 1,
      title: "Adrian",
      content: "19 year",
      createdAt: new Date()
    },
    {
      id: 2,
      title: "Yura",
      content: "19 year",
      createdAt: new Date()
    }
  ])
}