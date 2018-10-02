import {ICCProjectConfig} from '../CCConfig/ICCProjectConfig';

export interface ICCProject {
  projectConfig: ICCProjectConfig;
  loadProjectConfig: () => void;
}
