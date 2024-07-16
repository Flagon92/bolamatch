import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RegistroComponent } from './main/registro/registro.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { EquiposComponent } from './main/equipos/equipos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BracketComponent } from './main/bracket/bracket.component';
import { GruposComponent } from './main/grupos/grupos.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ViewComponent
    },
    {
        path: 'contenedor',
        component: ContenedorComponent,
        children: [
            {
                path: '',
                redirectTo: 'registro',
                pathMatch: 'full'
            },
            {
                path: 'registro',
                component: RegistroComponent
            },
            {
                path: 'equipos',
                component: EquiposComponent
            },
            {
                path: 'bracket',
                component: BracketComponent
            },
            {
                path: 'grupos',
                component: GruposComponent
            }
        ]
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];