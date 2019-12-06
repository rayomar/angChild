import {Component,Input } from '@angular/core'

@Component({
    selector:'hello-ls',
    template:'<h1>{{name}}</h1>'

})
export class HelloComponent{

    @Input() name:String;

}