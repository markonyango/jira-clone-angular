import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorHandler, NgModule, inject, provideAppInitializer } from '@angular/core';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { QuillModule } from 'ngx-quill';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import { SnowModule } from './core/snow/snow.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NzSpinModule,
        NzIconModule.forRoot([]),
        environment.production ? [] : AkitaNgDevtools,
        AkitaNgRouterStoreModule,
        QuillModule.forRoot(),
        SnowModule], providers: [
            {
                provide: NG_ENTITY_SERVICE_CONFIG,
                useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }
            },
            {
                provide: ErrorHandler,
                useValue: Sentry.createErrorHandler()
            },
            {
                provide: Sentry.TraceService,
                deps: [Router],
            },
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimations()
        ]
})
export class AppModule { }
