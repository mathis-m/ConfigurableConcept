import {ICCResourceConfig} from '../CCRresource/ICCResourceConfig';
import {ICCElementConfig} from '../CCBasics/CCConfig/ICCElementConfig';
import {ICCPictureResource} from '../CCRresource/ICCPictureResource';


export interface ICCPictureConfig extends ICCResourceConfig, ICCElementConfig {

  resource: ICCPictureResource;
  configureAsBackground(): void;
}
