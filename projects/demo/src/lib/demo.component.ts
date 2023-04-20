import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addDetail, addPost } from 'projects/demo/src/Ngrx/state/action';

@Component({
  selector: 'lib-demo',
  template: '',
  styles: [],
})
export class DemoComponent implements OnInit {
  @Input() data: any;
  @Input() detail: any;
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.store.dispatch(addPost({ data: this.data }));
  }
}
