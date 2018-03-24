import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bookmark } from '../../models/bookmark.interface';
import { Router } from '@angular/router'

@Component({
    selector: 'bookmark-form',
    template: `
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
        <div>
        Title:
        <input type="text" name="title" required #title="ngModel"
        [ngModel]="detail?.title">
        <div *ngIf="title?.errors?.required && title.dirty" class="error">
         </div>
        </div>


        <div>
        Title:
        <input type="text" name="title" required #title="ngModel"
        [ngModel]="detail?.title">
        <div *ngIf="title?.errors?.required && title.dirty" class="error">
         </div>
        </div>
        
        
        <div>
        Title:
        <input type="text" name="title" required #title="ngModel"
        [ngModel]="detail?.title">
        <div *ngIf="title?.errors?.required && title.dirty" class="error">
        Title is required!
         </div>
        </div>
        <div>
            <label>
            Add to favorites?
            <input type="checkbox" name="favorite" [ngModel]="detail?.favorite"
            (ngModelChange)="toggleFavorite($event)">
            </label>
        </div>
        <div *ngIf="form?.value.favorite">
        It's favorited! Just hit update!
        </div>

        <button type="submit" [disabled]="form.invalid">
        Update bookmark
        </button>
        </form>
   `
})
export class BookmarkFormComponent {
    @Input()
    detail: Bookmark;

    @Output()
    update: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

    constructor(private router: Router) { }

    handleSubmit(bookmark: Bookmark, valid: boolean) {
        if (valid) {
            bookmark.id = this.detail.id
            this.update.emit(bookmark);
            this.router.navigate(['']);
        }
    }

    toggleFavorite(favorite: boolean){
        this.detail.favorite=favorite;
    }
}