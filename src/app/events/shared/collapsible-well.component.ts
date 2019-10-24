import { Component, Input } from '@angular/core';
@Component({
    selector: 'collapsible-well',
    template: `
        <div class="well pointable" (click)="toggleContent()">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="!hidden"></ng-content>
        </div>
    `,
    styles:[`

    `]
})
export class CollapsibleWellComponent {

    @Input() title:string;
    hidden: boolean = false;
    toggleContent() {
        this.hidden = !this.hidden;
    }

}