import { ICCElementConfig } from '../CCBasics/CCConfig/ICCElementConfig';
import { ICCPictureResource } from '../CCRresource/ICCPictureResource';
import { ICCResourceConfig } from '../CCRresource/ICCResourceConfig';

export interface ICCPictureConfig extends ICCResourceConfig, ICCElementConfig {

  resource: ICCPictureResource;
  configureAsBackground(): void;
}
