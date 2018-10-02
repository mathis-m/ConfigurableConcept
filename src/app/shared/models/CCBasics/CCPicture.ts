import {ICCResource} from '../CRresource/ICCResource';
import {ICCResourceConfig} from '../CRresource/ICCResourceConfig';
import {CCPictureConfig} from '../CRresource/CCPictureConfig';

export class CCPicture implements ICCResource {
  public resourceConfig: ICCResourceConfig;
  constructor(public location: string, public name: string, public content?: string,) {
    const asBG = location === 'bg';
    this.resourceConfig = new CCPictureConfig(asBG);
  }
}
