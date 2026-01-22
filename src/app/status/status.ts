import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status {
  protected readonly currentData = signal(new Date());
  protected readonly userAgent = signal(navigator.userAgent);
  protected readonly languages = signal(navigator.languages);
  protected readonly cookieEnabled = signal(navigator.cookieEnabled);
  protected readonly logicalProcessors = signal(navigator.hardwareConcurrency);
  protected readonly maxTouchPoints = signal(navigator.maxTouchPoints);
}
