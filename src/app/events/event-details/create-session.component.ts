import { ISession } from './../shared/event.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html'
})
export class CreateSessionComponent implements OnInit{
    @Output() savedSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();
    newSessionForm:FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        })
    }

    saveSession(formvalue){
        let session:ISession ={
            id:undefined,
            name:formvalue.name,
            duration: +formvalue.duration,
            level: formvalue.level,
            presenter: formvalue.presenter,
            abstract:formvalue.abstract,
            voters:[]
        }
        this.savedSession.emit(session);
    }

    cancel(){
        this.cancelAddSession.emit(true);
    }

}