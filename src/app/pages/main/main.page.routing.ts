import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main.page.component';

const mainPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild([{
    path: '',
    component: MainPageComponent,
}]);

@NgModule({
    imports: [mainPageRoute],
    exports: [RouterModule],
})
export class MainPageRoutingModule {}
