export interface ICCElementConfig {
  elementType: string;
  content?: string;
  childElementConfigs?: ICCElementConfig[];
}
