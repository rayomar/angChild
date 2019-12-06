import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Input()
  count: number = 0;

  @Output()
  change:EventEmitter<number>=new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }

  ngOnInit() {
  }

}
