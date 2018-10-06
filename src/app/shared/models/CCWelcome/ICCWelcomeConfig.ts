import { ICCElementConfig } from '../CCBasics/CCConfig/ICCElementConfig';
import { ICCTextConfig } from '../CCBasics/CCConfig/ICCTextConfig';
import { ICCPictureConfig } from '../CCPicture/ICCPictureConfig';
import { ICCResourceConfig } from '../CCRresource/ICCResourceConfig';

export interface ICCWelcomeConfig extends ICCElementConfig, ICCResourceConfig {
  childElementConfigs: Array<(ICCPictureConfig | ICCTextConfig)>;
}
