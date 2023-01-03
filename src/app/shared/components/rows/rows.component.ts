import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss']
})
export class RowsComponent implements OnInit {

  @Input() data: any;
  @Input() index: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.data, "data");

  }
  replace(val: any) {
    console.log(val);
    if (val == '') {
      return 0
    }
    else {
      return val
    }
  }
}
