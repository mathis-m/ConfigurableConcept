import {Component, Input, OnInit} from '@angular/core';
import {ICCElement} from '../../models/CCBasics/ICCElement';

@Component({
  selector: 'app-ccelement',
  templateUrl: './ccelement.component.html',
  styleUrls: ['./ccelement.component.css']
})
export class CCElementComponent implements OnInit, ICCElement {

  @Input()elementConfig: ICCElementConfig;
  loadElementConfig: () => void;

  constructor() { }

  ngOnInit() {
  }



}
