import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'main', pathMatch: 'full',
    },
    {
        path: 'main',
        loadChildren: () => import('./pages/main/main.page.module').then(m => m.MainPageModule),
    },
    {
        path: 'forecast/:id',
        loadChildren: () => import('./pages/forecast/forecast.page.module').then(m => m.ForecastPageModule),
    },
    {
        path: '**', redirectTo: '/forecast/London',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
