import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';


export const routes: Routes = [
    {path: 'index', component:IndexComponent},
    {path: 'adm', loadChildren:() => import('./admin/admin.module').then(module => module.AdminModule)},
    {path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule)},
    {path: '', redirectTo: '/index', pathMatch: 'full' },

    
];
