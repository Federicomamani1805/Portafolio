import { Routes } from '@angular/router';
import { Aboutme } from './pages/aboutme/aboutme';
import { Experience } from './pages/experience/experience';
import { Education } from './pages/education/education';

export const routes: Routes = [
    { path: '', component: Aboutme },
    { path: 'experiencia', component: Experience },
    { path: 'educacion', component: Education },
    // Ruta alias opcional para sobre mí
    { path: 'sobre-mi', component: Aboutme },
];
