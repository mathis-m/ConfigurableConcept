import { ICCPictureResourceConfig } from './ICCPictureResourceConfig';
import { ICCResource } from './ICCResource';

export interface ICCPictureResource extends ICCResource {
  resourceConfig: ICCPictureResourceConfig;
}
