import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { 
        path: '', redirectTo: '/forms', pathMatch: 'full'

     },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'table',component:TableComponent
    },
    {
        path:'forms',component:FormComponent
    }
];
