import { Component, Input, OnInit } from '@angular/core';
import { ICCElementConfig } from '../../models/CCBasics/CCConfig/ICCElementConfig';

@Component({
  selector: 'app-ccelement',
  templateUrl: './ccelement.component.html',
  styleUrls: ['./ccelement.component.scss'],
})
export class CCElementComponent implements OnInit {

  @Input() elementConfig: ICCElementConfig;
  loadElementConfig: () => void;

  ngOnInit() {
    // debugger;
  }

}
