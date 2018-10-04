import {ICCResource} from './ICCResource';
import {ICCPictureResourceConfig} from './ICCPictureResourceConfig';

export interface ICCPictureResource extends ICCResource {
  resourceConfig: ICCPictureResourceConfig;
}
