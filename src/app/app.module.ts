import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { PageLayoutModule } from './components/page-layout/page-layout.module';

@NgModule({
	declarations: [
		AppComponent,
	],
    imports: [
      BrowserModule,
      HttpClientModule,
	    CommonModule,
	    AppRoutingModule,
      HeaderModule,
      FooterModule,
	    PageLayoutModule,
    ],
	bootstrap: [AppComponent],
})
export class AppModule {
}
