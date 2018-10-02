import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICCProjectConfig} from '../../models/CCBasics/CCConfig/ICCProjectConfig';
import {CCPicture} from '../../models/CCBasics/CCPicture';
import {CCPictureConfig} from '../../models/CRresource/CCPictureConfig';

@Injectable({
  providedIn: 'root'
})
export class FakeDateProviderService {
  constructor() {
  }

  public getProjectConfig(): Observable<ICCProjectConfig> {
    return of({
      companyName: 'John Doe AG',
      design: '000',
      pages: [
        {
          pageName: 'testPage',
          pagePath: 'test',
          pageID: 'testPage',
          pageRole: 'some',
          elements: [
            {
              elementType: 'text',
              content: 'test fick dich '
            },
            {
              elementType: 'text',
              sizeEm: 3,
              content: 'nice try'
            }
          ]
        },
        {
          pageName: 'Home',
          pagePath: '',
          pageID: 'testPage',
          pageRole: 'Home',
          elements: [
            {
              elementType: 'text',
              sizeEm: 2,
              content: 'Hello to CC'
            }
          ]
        },
        {
          pageName: 'Welcome',
          pagePath: 'landing',
          inMenu: 'false',
          pageID: 'testPage',
          pageRole: 'Home',
          elements: [
            {
              elementType: 'welcome',
              pictureAsBackground: 'true',
            }
          ]
        }
      ]
    });
  }
}
