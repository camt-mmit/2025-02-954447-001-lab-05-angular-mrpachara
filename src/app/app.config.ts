import { APP_ID, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'ng-week-05' },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
