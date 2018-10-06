import { ICCResourceConfig } from './ICCResourceConfig';

export interface ICCResource {
  name: string;
  location: string;
  content?: string;
  resourceConfig: ICCResourceConfig;
}
