import { Component, Input, OnInit } from '@angular/core';
import { ICCMenu } from '../../models/CCMenu/ICCMenu';
import { ICCMenuConfig } from '../../models/CCMenu/ICCMenuConfig';

@Component({
  selector: 'app-ccmenu',
  templateUrl: './ccmenu.component.html',
  styleUrls: ['./ccmenu.component.scss']
})
export class CCMenuComponent implements OnInit, ICCMenu {
  @Input() elementConfig: ICCMenuConfig;

  constructor() { }

  ngOnInit() {
    // debugger;
    // console.log(this.elementConfig);
  }

}
