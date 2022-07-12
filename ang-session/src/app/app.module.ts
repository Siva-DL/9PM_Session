import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'main', component: MainComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
