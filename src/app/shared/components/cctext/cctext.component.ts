import { Component, Input } from '@angular/core';
import { ICCText } from '../../models/CCBasics/ICCText';
import { ICCTextConfig } from '../../models/CCBasics/CCConfig/ICCTextConfig';

@Component({
  selector: 'app-cctext',
  templateUrl: './cctext.component.html',
  styleUrls: ['./cctext.component.scss']
})
export class CCTextComponent implements ICCText {
  @Input() elementConfig: ICCTextConfig;
  loadElementConfig: () => void;

}
