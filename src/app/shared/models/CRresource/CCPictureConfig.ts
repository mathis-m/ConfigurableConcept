import {ICCResourceConfig} from './ICCResourceConfig';

export class CCPictureConfig implements ICCResourceConfig {
  height: string;
  width: string;
  constructor(asBackground: boolean, config?: ICCResourceConfig) {
      if (asBackground || !asBackground && config === undefined) {
        this.configureAsBackground();
      } else {
        this.height = config.height;
        this.width = config.width;
      }
  }
  private configureAsBackground() {
    this.width = '100%';
    this.height = '100%';
  }


}
