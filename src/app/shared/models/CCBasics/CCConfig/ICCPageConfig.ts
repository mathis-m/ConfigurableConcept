import { ICCElementConfig } from './ICCElementConfig';

export interface ICCPageConfig {
  pageName: string;
  pagePath: string;
  pageID: string;
  pageRole: string;
  inMenu?: boolean;
  elements: ICCElementConfig[];
}
