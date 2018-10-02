import {ICCElementConfig} from '../CCConfig/ICCElementConfig';

export interface ICCElement {
  elementConfig: ICCElementConfig;
  loadElementConfig: () => void;
}

