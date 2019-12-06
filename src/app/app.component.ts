import { Component, ViewChild , AfterViewInit,ViewChildren, QueryList} from '@angular/core';
import {HelloComponent} from './Hello.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  name:String="fouad";

  ngAfterViewInit(): void {
    (this.hello.name=="oma")?
    console.log("hiii",this.hello.name):console.log("check")
    this.hellos.forEach(hello=> console.log(hello.name))
  }

@ViewChild(HelloComponent,{static:false}) hello: HelloComponent

@ViewChildren(HelloComponent) hellos: QueryList<any>

myCount: number = 10;


countChange(event) {
this.myCount=event
}




  
}
