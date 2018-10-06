import { Injectable } from '@angular/core';
import { ICCPageConfig } from '../../models/CCBasics/CCConfig/ICCPageConfig';
import { FakeDateProviderService } from '../data/fake-date-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CCConfigLoaderService {
  constructor(private dataProvider: FakeDateProviderService) {
  }

  public getProjectConfig = () => this.dataProvider.getProjectConfig();
  public getElements = (pageID: String, pages: ICCPageConfig[]) => pages.findIndex(el => el.pageID === pageID);

}
