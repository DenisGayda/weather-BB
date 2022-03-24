import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForecastRouterResolver } from '../../router-resolvers/forecast-router-resolver';
import { ForecastPageComponent } from './forecast.page.component';

const forecastPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild([{
    path: '',
    component: ForecastPageComponent,
    resolve: { forecast: ForecastRouterResolver }
}]);

@NgModule({
    imports: [forecastPageRoute],
    exports: [RouterModule],
})
export class ForecastPageRoutingModule {}
