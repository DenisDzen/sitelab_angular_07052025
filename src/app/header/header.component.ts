import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // <- Добавьте CommonModule в массив imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  currentLang = '';

  ngOnInit(): void {
    this.currentLang = window.location.pathname.includes('/en') ? 'en' : 'uk';
  }

  switchLang(lang: 'uk' | 'en') {
    const target = lang === 'en' ? '/en/' : '/';
    window.location.assign(target);
  }
  
  constructor(
  ) {}

  fullPageScroll(i:any) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

}
