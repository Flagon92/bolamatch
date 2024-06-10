import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RegistroComponent } from './main/registro/registro.component';
import { ApuestasComponent } from './main/apuestas/apuestas.component';
import { ColaboracionesComponent } from './main/colaboraciones/colaboraciones.component';
import { VotacionesComponent } from './main/votaciones/votaciones.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { EquiposComponent } from './main/equipos/equipos.component';
import { DuelosComponent } from './main/duelos/duelos.component';
import { ClasificadosComponent } from './main/clasificados/clasificados.component';
import { OpcionesComponent } from './main/opciones/opciones.component';

export const routes: Routes = [
    {
        path: '',
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
                path: 'duelos',
                component: DuelosComponent
            },
            {
                path: 'clasificados',
                component: ClasificadosComponent
            },
            {
                path: 'opciones',
                component: OpcionesComponent
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
    }
];
