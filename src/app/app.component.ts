import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Добавлен импорт CommonModule
import { HeaderComponent } from './header/header.component'; // Добавлен импорт HeaderComponent
import { MainComponent } from './main/main.component'; // Добавлен импорт MainComponent

@Component({
  selector: 'app-root',
  standalone: true, // Добавлено standalone: true
  imports: [CommonModule, HeaderComponent, MainComponent], // Добавлены импорты в массив imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  fixedHeader: boolean = false; // Определено свойство fixedHeader

  constructor() {}

  ngOnInit(): void {
    // ...
  }

  ngAfterViewInit(): void {
    // ...
  }
}