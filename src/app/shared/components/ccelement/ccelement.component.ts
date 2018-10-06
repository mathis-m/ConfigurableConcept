import {Component, Input, OnInit} from '@angular/core';
import {ICCElement} from '../../models/CCBasics/ICCElement';
import {ICCElementConfig} from '../../models/CCBasics/CCConfig/ICCElementConfig';

@Component({
  selector: 'app-ccelement',
  templateUrl: './ccelement.component.html',
  styleUrls: ['./ccelement.component.scss']
})
export class CCElementComponent implements OnInit, ICCElement {

  @Input()elementConfig: ICCElementConfig;
  loadElementConfig: () => void;

  constructor() {

  }

  ngOnInit() {
    debugger;
  }



}
