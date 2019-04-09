import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

import { AdminComponent } from './admin/admin.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
        children: [
          { path: 'activity', component: HomeComponent, canActivate: [AuthGuard] },
          { path: 'files', component: FileBrowserComponent, canActivate: [AuthGuard] },
          { path: 'trash', component: HomeComponent, canActivate: [AuthGuard] },
        ]
    },
    
    // { path: 'chat', component: FilesComponent, outlet: 'admin' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);