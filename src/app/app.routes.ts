import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RegistroComponent } from './main/registro/registro.component';
import { ApuestasComponent } from './main/apuestas/apuestas.component';
import { ColaboracionesComponent } from './main/colaboraciones/colaboraciones.component';
import { VotacionesComponent } from './main/votaciones/votaciones.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { EquiposComponent } from './main/equipos/equipos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BracketComponent } from './main/bracket/bracket.component';

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
            }
        ]
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'apuestas',
        component: ApuestasComponent
    },
    {
        path: 'colaboraciones',
        component: ColaboracionesComponent
    },
    {
        path: 'votaciones',
        component: VotacionesComponent
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