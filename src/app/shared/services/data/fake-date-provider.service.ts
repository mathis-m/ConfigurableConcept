import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICCProjectConfig} from '../../models/CCConfig/ICCProjectConfig';

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
              content: 'Hello to CC'
            }
          ]
        }
      ]
    });
  }
}
