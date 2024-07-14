//This is the mail application component inside this we have to import the other nestet component
import { Component } from '@angular/core';
import { HeaderComponent } from "./Header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
