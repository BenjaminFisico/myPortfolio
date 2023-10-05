import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { themeProperties } from '../interfaces/themeStructure';
import { THEMES } from '../configs/themeConfig';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.setTheme(this.getTheme());
   }

  setTheme(themeName: string): void {
    const theme: themeProperties = (THEMES as any)[themeName];
    localStorage.setItem('themeSelected', themeName);
    
    Object.entries(theme).forEach(([property, value]) => {
      this.document.documentElement.style.setProperty(
        `--${property}`, value);
    });
  }

  getTheme(): string{
    return localStorage.getItem('themeSelected') || 'greenTheme';
  }

  getThemeValues(): themeProperties[]{
    return Object.values(THEMES);
  }


  getThemeNamesList(): string[]{
    return Object.keys(THEMES);
  }

}
