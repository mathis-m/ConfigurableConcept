import {Component, Input, OnInit} from '@angular/core';
import {ICCResource} from '../../models/CCRresource/ICCResource';
import {ICCWelcomeConfig} from '../../models/CCWelcome/ICCWelcomeConfig';
import {ICCElement} from '../../models/CCBasics/ICCElement';

@Component({
  selector: 'app-ccwelcome',
  templateUrl: './ccwelcome.component.html',
  styleUrls: ['./ccwelcome.component.scss']
})
export class CCWelcomeComponent implements OnInit, ICCElement {

  @Input()elementConfig: ICCWelcomeConfig;
  loadElementConfig: () => void;
  constructor() {
    console.log(this.elementConfig);
  }

  ngOnInit() {
  }


}
