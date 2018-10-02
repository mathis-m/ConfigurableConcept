import {ICCElementConfig} from '../CCBasics/CCConfig/ICCElementConfig';
import {ICCResourceConfig} from '../CRresource/ICCResourceConfig';
import {ICCResource} from '../CRresource/ICCResource';

export interface ICCWelcomeConfig extends ICCElementConfig {
  pictureAsBackground: boolean;
  pictureConfig: ICCResourceConfig;
  picture: ICCResource;
}
