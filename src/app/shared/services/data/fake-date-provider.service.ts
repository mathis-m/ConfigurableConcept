import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICCProjectConfig } from '../../models/CCBasics/CCConfig/ICCProjectConfig';

@Injectable({
  providedIn: 'root',
})
export class FakeDateProviderService {

  public getProjectConfig(): Observable<ICCProjectConfig> {
    return of({
      companyName: 'John Doe AG',
      design: '000',
      pages: [
        {
          pageName: 'testPage',
          pagePath: '/test',
          pageID: 'testPage',
          pageRole: 'some',
          elements: [
            {
              elementType: 'text',
              content: 'test fick dich ',
            },
            {
              elementType: 'text',
              sizeEm: 3,
              content: 'nice try',
            },
          ],
        },
        {
          pageName: 'Home',
          pagePath: '/',
          pageID: 'testPage',
          pageRole: 'Home',
          elements: [
            {
              elementType: 'text',
              sizeEm: 2,
              content: 'Hello to CC',
            },
          ],
        },
        {
          pageName: 'element showcase',
          pagePath: '/showcase',
          pageID: 'showcase',
          pageRole: 'Home',
          elements: [
            {
              elementType: 'welcome',
              childElementConfigs: [
                {
                  elementType: 'text',
                  sizeEm: 2,
                  content: 'get started with CC',
                },
                {
                  elementType: 'text',
                  sizeEm: 2.5,
                  content: 'Configurable Concept',
                },
                {
                  elementType: 'pic',
                  resource: {
                    name: 'test pic',
                    location: 'http://www.corporate-eye.com/main/wp-content/uploads/2013/01/international-presentations.jpg',
                  },
                },
              ],
            },
          ],
        },
        {
          pageName: 'Welcome',
          pagePath: '/landing',
          inMenu: false,
          pageID: 'testPage',
          pageRole: 'Home',
          elements: [
            {
              elementType: 'welcome',
              childElementConfigs: [
                {
                  elementType: 'text',
                  sizeEm: 2,
                  content: 'get started with CC',
                },
                {
                  elementType: 'text',
                  sizeEm: 2.5,
                  content: 'Configurable Concept',
                },
                {
                  elementType: 'pic',
                  resource: {
                    name: 'test pic',
                    location: 'http://www.corporate-eye.com/main/wp-content/uploads/2013/01/international-presentations.jpg',
                  },
                },
              ],
            },
          ],
        },
      ],
    });
  }
}
