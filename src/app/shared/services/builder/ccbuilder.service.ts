import { Injectable } from '@angular/core';
import {CCConfigLoaderService} from '../config/ccconfig-loader.service';
import { Router } from '@angular/router';
import {ICCProjectConfig} from '../../models/CCConfig/ICCProjectConfig';
import {ICCProject} from '../../models/CCBasics/ICCProject';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CCBuilderService implements ICCProject {
  projectConfig: ICCProjectConfig;
  constructor(private loader: CCConfigLoaderService) {
    this.loadProjectConfig();
  }
  loadProjectConfig: () => void = () => this.loader.getProjectConfig().subscribe(el => this.projectConfig = el);

  public getProjectConfig(): Observable<ICCProjectConfig> {
    if (this.projectConfig === undefined) {
      return this.loader.getProjectConfig();
    }
    return of(this.projectConfig);
  }
}
