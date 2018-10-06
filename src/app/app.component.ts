import { Component } from '@angular/core';
import {ICCProject} from './shared/models/CCBasics/ICCProject';
import {ICCProjectConfig} from './shared/models/CCBasics/CCConfig/ICCProjectConfig';
import {CCBuilderService} from './shared/services/builder/ccbuilder.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';
import {ICCPageConfig} from './shared/models/CCBasics/CCConfig/ICCPageConfig';
import {ICCMenuConfig} from './shared/models/CCMenu/ICCMenuConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ICCProject {
  constructor(private builderService: CCBuilderService, private router: Router) {
    this.loadProjectConfig();
  }
  projectConfig: ICCProjectConfig;
  menuConfig: ICCMenuConfig = {allowedPages: [], name: ''};
  loadProjectConfig: () => void = () => this.builderService.getProjectConfig().subscribe(config => this.setConfigs(config));
  private setConfigs = (config: ICCProjectConfig) => {
    this.projectConfig = config;
    this.menuConfig.allowedPages = config.pages.filter(page => page.inMenu !== 'false');
    this.menuConfig.name = config.companyName;
  }

}
