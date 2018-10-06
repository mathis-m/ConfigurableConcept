import { ICCTextConfig } from '../CCBasics/CCConfig/ICCTextConfig';
import { ICCElement } from '../CCBasics/ICCElement';
import { ICCPictureConfig } from '../CCPicture/ICCPictureConfig';
import { ICCWelcomeConfig } from './ICCWelcomeConfig';

export interface ICCWelcome extends ICCElement {
  elementConfig: ICCWelcomeConfig;
  childConfigs: {
    sub_text: ICCTextConfig,
    picture: ICCPictureConfig,
    head_text: ICCTextConfig,
  };
}
