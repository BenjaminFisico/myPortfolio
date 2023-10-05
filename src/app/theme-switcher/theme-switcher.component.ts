import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { themeProperties } from '../interfaces/themeStructure';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  
  selectedTheme: string = 'lightTheme';
  themes: themeProperties[] = [];
  showSelector: boolean = false;

  constructor(private themeService: ThemeService){}

  ngOnInit(){
    this.selectedTheme = this.themeService.getTheme();
    this.themes = this.themeService.getThemeValues();
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  toogleThemeSelector(){
    this.showSelector = !this.showSelector;
    console.log(this.showSelector);
  }

}

