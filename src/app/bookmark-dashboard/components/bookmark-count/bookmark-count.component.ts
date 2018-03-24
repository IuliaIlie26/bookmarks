import { Component, Input } from '@angular/core';
import { Bookmark } from '../../models/bookmark.interface';

@Component({
    selector: 'bookmark-count',
    
    template: `
    <div *ngIf="items?.length >0; else elseBlock">{{items?.length}}</div>
    <ng-template #elseBlock>Add some bookmarks</ng-template>

       <!-- sau
        <div>
            bookmark count<br>
            ? daca e undefined sau null, mai asteapta putin sa primesti ceva 
            {{items?.length >0 ? '{{items?.length}}':'Add more'}}
        </div>-->
    `
})
export class BookmarkCount {
    @Input()
    items: Bookmark[];
    constructor() {}
}