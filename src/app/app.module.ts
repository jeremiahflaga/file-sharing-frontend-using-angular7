import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { FilesActionsPanelComponent } from './files-actions-panel/files-actions-panel.component';
import { CreateFolderDialogComponent } from './create-folder-dialog/create-folder-dialog.component';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule
];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        materialModules,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminDashboardComponent,
        LeftPanelComponent,
        FileBrowserComponent,
        FilesActionsPanelComponent,
        CreateFolderDialogComponent
      ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    entryComponents: [CreateFolderDialogComponent]
})

export class AppModule { }