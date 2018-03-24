import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not_found.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkDashboardModule } from './bookmark-dashboard/bookmark-dashboard.module'

const ROUTES: Routes = [
  {
    path: '', redirectTo: 'bookmarks', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BookmarkDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
