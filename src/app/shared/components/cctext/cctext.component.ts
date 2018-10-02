import {Component, Input, OnInit} from '@angular/core';
import {ICCText} from '../../models/CCBasics/ICCText';
import {ICCTextConfig} from '../../models/CCBasics/ICCTextConfig';

@Component({
  selector: 'app-cctext',
  templateUrl: './cctext.component.html',
  styleUrls: ['./cctext.component.scss']
})
export class CCTextComponent implements OnInit, ICCText {
  @Input()elementConfig: ICCTextConfig;
  loadElementConfig: () => void;

  constructor() { }

  ngOnInit() {
  }


}
