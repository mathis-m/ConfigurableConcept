import { ICCPageConfig } from './CCConfig/ICCPageConfig';

export interface ICCPage {
  pageConfig: ICCPageConfig;
  loadPageConfig?: () => void;
}
