import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    template: `
        <div id="simple-modal" #modalcontainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close"  data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-tile">{{title}}</h4>
                </div>
                <div class="modal-body" (click)=closeModel()>
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
`,
    styles: [`
    .modal-body { height:250px; overflow:scroll; padding: 0px}
`
    ]
})
export class SimpleModelComponent {
    @Input() title: string;
    @ViewChild('modalcontainer', {static: false}) containerEl: ElementRef;
    constructor(@Inject(JQ_TOKEN) private $:any){
        
    }

    closeModel() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
};