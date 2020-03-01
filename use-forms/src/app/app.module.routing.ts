import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { CalcResultComponent } from './calc-result/calc-result.component';

// routing rules :
export const APP_ROUTES: Route[] = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent

    },
    {
        path: 'edit-person', component: EditPersonComponent

    },
    {
        path: 'kefel', component: KefelBoardComponent

    },
    {
        path: 'result/:x/:y', component: CalcResultComponent
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    }
];
