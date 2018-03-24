import { Component } from '@angular/core';
import { BookmarkDashboardService } from '../../bookmark-dashboard.service'
import { ActivatedRoute } from '@angular/router'
import { Bookmark } from '../../models/bookmark.interface';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'bookmark-viewer',
    styleUrls: ['./bookmark-viewer.component.scss'],
    template: `
    <div>
  <p>
    bookmark viewer<br>
    {{bookmark?.title}}</p>
    <bookmark-form [detail]="bookmark" (update)="handleUpdate($event)">
    </bookmark-form> 
    

    <div *ngIf="!isLoaded">Loading...</div>
    </div>`

})

export class BookmarkViewerComponent {
    bookmark: Bookmark;
    isLoaded: boolean;
    constructor(private bookmarkService: BookmarkDashboardService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((data: Bookmark) => this.bookmarkService.getBookmark(data.id))
            .subscribe((data: Bookmark) => {
                // added the timeout to simulate a slower connection/loading status
                setTimeout(() => {
                    this.bookmark = data;
                    this.isLoaded = true;
                }, 3000);
            });
    }

    handleUpdate(event: Bookmark) {
        this.bookmarkService.
            updateBookmark(event)
            .subscribe((data: Bookmark) => {
                this.bookmark = Object.assign({}, this.bookmark, event)
            });
    }

}
