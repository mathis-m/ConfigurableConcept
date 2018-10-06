import {ICCElement} from '../CCBasics/ICCElement';
import {ICCWelcomeConfig} from './ICCWelcomeConfig';
import {ICCPictureConfig} from '../CCPicture/ICCPictureConfig';
import {ICCTextConfig} from '../CCBasics/CCConfig/ICCTextConfig';

export interface ICCWelcome extends ICCElement {
  elementConfig: ICCWelcomeConfig;
  childConfigs: {
    sub_text: ICCTextConfig,
    picture: ICCPictureConfig,
    head_text: ICCTextConfig,
  };
}
