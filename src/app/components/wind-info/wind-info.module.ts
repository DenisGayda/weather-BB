import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WindInfoComponent } from './wind-info.component';

@NgModule({
	declarations: [WindInfoComponent],
	imports: [CommonModule],
	exports: [WindInfoComponent],
})
export class WindInfoModule {
}
