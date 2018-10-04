import {ICCResourceConfig} from '../CCRresource/ICCResourceConfig';
import {CCPictureResource} from '../CCRresource/ICCPictureResource';
import {ICCElementConfig} from '../CCBasics/CCConfig/ICCElementConfig';


export interface ICCPictureConfig extends ICCResourceConfig, ICCElementConfig {

  resource: CC;
  configureAsBackground(): void;
}
