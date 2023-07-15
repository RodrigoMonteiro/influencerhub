import { Injectable } from '@angular/core';
import { Theme, lightTheme} from './theme';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: Theme = lightTheme;
  private themeChangedSubject = new Subject<Theme>();

  themeChanged = this.themeChangedSubject.asObservable();

  constructor() {
    this.applyThemeProperties()
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
  getCurrentThemeMode(): string {
    return this.currentTheme.mode;
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.themeChangedSubject.next(theme);
    this.applyThemeProperties();
  }

  applyThemeProperties(): void {
    const themeProperties = this.currentTheme.properties;
    Object.entries(themeProperties).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }
}
