import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HomeComponent as AdminHomeComponent } from './admin/components/home/home.component'
import { UserComponent } from './admin/components/user/user.component';
import { LoginComponent } from './admin/layouts/pages/login/login.component';
import { isLoginGuard } from './admin/custom-functions/guards';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin/login', component: LoginComponent, canActivate: [isLoginGuard] },
    {
        path: 'admin', component: AdminComponent, canActivate: [isLoginGuard], children: [
            { path: '', component: AdminHomeComponent },
            { path: 'home', component: AdminHomeComponent },
            { path: 'user', component: UserComponent },

        ]
    }

];
