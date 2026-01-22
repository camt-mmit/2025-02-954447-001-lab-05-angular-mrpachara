import {
  APP_ID,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  effect,
  inject,
  model,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly appId = inject(APP_ID);
  private readonly themeKey = `${this.appId}-theme` as const;

  protected readonly title = signal('week-05');

  protected readonly theme = model(localStorage.getItem(this.themeKey) ?? ('' as const));

  constructor() {
    const document = inject(DOCUMENT);

    effect(() => {
      const theme = this.theme();

      if (['light', 'dark'].includes(theme)) {
        localStorage.setItem(this.themeKey, theme);
        document.documentElement.dataset['theme'] = theme;
      } else {
        localStorage.removeItem(this.themeKey);
        delete document.documentElement.dataset['theme'];
      }
    });
  }
}
