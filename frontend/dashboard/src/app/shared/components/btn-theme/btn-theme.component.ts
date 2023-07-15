import { Component } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { darkTheme, lightTheme } from '../../theme/theme';

@Component({
  selector: 'app-btn-theme',
  templateUrl: './btn-theme.component.html',
  styleUrls: ['./btn-theme.component.scss'],
})
export class BtnThemeComponent {
  constructor(private themeService: ThemeService) {}

  switchTheme(): void {
    const currentThemeMode = this.themeService.getCurrentThemeMode();
    const newTheme = currentThemeMode === 'light' ? darkTheme : lightTheme;
    this.themeService.setTheme(newTheme);
  }
}
