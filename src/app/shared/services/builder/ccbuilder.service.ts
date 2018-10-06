import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICCProjectConfig } from '../../models/CCBasics/CCConfig/ICCProjectConfig';
import { ICCProject } from '../../models/CCBasics/ICCProject';
import { CCConfigLoaderService } from '../config/ccconfig-loader.service';

@Injectable({
  providedIn: 'root',
})
export class CCBuilderService implements ICCProject {
  projectConfig: ICCProjectConfig;

  constructor(private loader: CCConfigLoaderService) {
    this.loadProjectConfig();
  }

  loadProjectConfig: () => void = () => this.loader.getProjectConfig().subscribe((el) => this.projectConfig = el);

  public getProjectConfig(): Observable<ICCProjectConfig> {
    if (this.projectConfig === undefined) {
      return this.loader.getProjectConfig();
    }
    return of(this.projectConfig);
  }
}
