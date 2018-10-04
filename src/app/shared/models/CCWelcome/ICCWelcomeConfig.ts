import {ICCElementConfig} from '../CCBasics/CCConfig/ICCElementConfig';
import {ICCResourceConfig} from '../CCRresource/ICCResourceConfig';
import {ICCPictureConfig} from '../CCPicture/ICCPictureConfig';
import {ICCTextConfig} from '../CCBasics/CCConfig/ICCTextConfig';

export interface ICCWelcomeConfig extends ICCElementConfig, ICCResourceConfig {
  childElementConfigs: (ICCPictureConfig | ICCTextConfig)[];
}
