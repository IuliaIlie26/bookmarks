import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { BookmarkDashboardService } from '../../bookmark-dashboard.service'
import {Bookmark} from '../../models/bookmark.interface'
@Component({
    selector: 'bookmark-dashboard',
    styleUrls: ['./bookmark-dashboard.component.scss'],
    template: `
    <div >
    <bookmark-count [items]="bookmarks"></bookmark-count>
    <bookmark-card *ngFor="let bookmark of bookmarks" [card]="bookmark">
    </bookmark-card>    
    <button (click)="onClick()"> Go to add-new</button>
    </div>`
})

export class BookmarkDashboardComponent {
    bookmarks: Bookmark[];
    constructor(private router: Router,
    private bookmarkService: BookmarkDashboardService) { 
        console.log("constructor");
    }

    ngOnInit(){
        this.bookmarkService.getBookmarks()
        .subscribe((data)=>{
            console.log(data);
            this.bookmarks=data;
        }); //trebuie sa te abonezi ca sa primesti responsul, e listener
    }

    onClick() {
        //ia din rutele deja definite, unde cauta din bookmarks in children
        this.router.navigate(['bookmarks', 'add-new']);
    }
}