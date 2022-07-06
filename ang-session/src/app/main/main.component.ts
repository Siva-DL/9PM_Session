import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  @Input() isCheck: boolean | undefined;
  @Input() users: any;

  // step1:
  @Output() userTitle = new EventEmitter<string>();

  ngOnInit(): void {}

  // step2:
  addUserTitle(name: string) {
    // alert(name);
    this.userTitle.emit(name);
  }
}
