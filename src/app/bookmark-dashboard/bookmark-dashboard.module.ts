import { NgModule } from '@angular/core';
import { BookmarkDashboardComponent } from './containers/bookmark-dashboard/bookmark-dashboard.component';
import { BookmarkAddComponent } from './containers/bookmark-add/bookmark-add.component'
import { BookmarkViewerComponent } from './containers/bookmark-viewer/bookmark-viewer.component'
import {BookmarkCount} from './components/bookmark-count/bookmark-count.component'
import { RouterModule, Routes } from '@angular/router';
import {BookmarkDashboardService} from './bookmark-dashboard.service'
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import {Bookmark} from './models/bookmark.interface'
import { CommonModule } from '@angular/common';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import {FormsModule} from '@angular/forms'

//aici se creaza rutele, gen blabla.com/ruta din path pe care o declari tu
const ROUTES: Routes = [
    {
        path: 'bookmarks', children: [
            {
                path: '', component: BookmarkDashboardComponent
            },
            {
                path: 'add-new', component: BookmarkAddComponent
            },
            {
                path: 'viewer/:id', component: BookmarkViewerComponent
            }
          ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        BookmarkDashboardComponent,
        BookmarkAddComponent,
        BookmarkViewerComponent,
        BookmarkCount,
        BookmarkCardComponent,
        BookmarkFormComponent

    ],
    providers: [

        BookmarkDashboardService

    ]
})

export class BookmarkDashboardModule {

}