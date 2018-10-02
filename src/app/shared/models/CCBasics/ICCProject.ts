import {ICCProjectConfig} from './ICCProjectConfig';

export interface ICCProject {
  projectConfig: ICCProjectConfig;
  loadProjectConfig: () => void;
}
