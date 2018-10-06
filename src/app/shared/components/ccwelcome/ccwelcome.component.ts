import { Component, Input, OnInit } from '@angular/core';
import { ICCTextConfig } from '../../models/CCBasics/CCConfig/ICCTextConfig';
import { ICCPictureConfig } from '../../models/CCPicture/ICCPictureConfig';
import { ICCWelcome } from '../../models/CCWelcome/ICCWelcome';
import { ICCWelcomeConfig } from '../../models/CCWelcome/ICCWelcomeConfig';

@Component({
  selector: 'app-ccwelcome',
  templateUrl: './ccwelcome.component.html',
  styleUrls: ['./ccwelcome.component.scss'],
})
export class CCWelcomeComponent implements OnInit, ICCWelcome {

  @Input() elementConfig: ICCWelcomeConfig;
  childConfigs: { sub_text: ICCTextConfig; picture: ICCPictureConfig; head_text: ICCTextConfig };

  constructor() {
    console.log(this.elementConfig);
    this.childConfigs = {
      sub_text: undefined,
      picture: undefined,
      head_text: undefined,
    };
  }

  ngOnInit() {
    this.elementConfig.childElementConfigs
      .forEach((el: any) => {
        if (el.elementType === 'pic') {
          this.childConfigs.picture = el as ICCPictureConfig;
        } else {
          if ((this.elementConfig.childElementConfigs
            .find((e: ICCTextConfig) => e.sizeEm !== (el as ICCTextConfig).sizeEm) as ICCTextConfig)
            .sizeEm > (el as ICCTextConfig).sizeEm) {
            this.childConfigs.sub_text = el as ICCTextConfig;
          } else {
            this.childConfigs.head_text = el as ICCTextConfig;
          }
        }
      });
  }


}
