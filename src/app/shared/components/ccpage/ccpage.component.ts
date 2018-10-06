import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICCPageConfig } from '../../models/CCBasics/CCConfig/ICCPageConfig';
import { ICCProjectConfig } from '../../models/CCBasics/CCConfig/ICCProjectConfig';
import { ICCPage } from '../../models/CCBasics/ICCPage';
import { CCBuilderService } from '../../services/builder/ccbuilder.service';

@Component({
  selector: 'app-ccpage',
  templateUrl: './ccpage.component.html',
  styleUrls: ['./ccpage.component.scss'],
})
export class CCPageComponent implements ICCPage {

  public projectConfig: ICCProjectConfig;
  public pageConfig: ICCPageConfig;
  loadPageConfig = () => this.builderService.getProjectConfig()
    .subscribe((config) => {
      this.router.events.subscribe(() => this.setPageConfig(config));
      this.setPageConfig(config);
    })

  constructor(private router: Router, private builderService: CCBuilderService) {
    // console.log(`re:${this.router.url}`);
    this.loadPageConfig();
  }

  private setPageConfig(projectConfig: ICCProjectConfig) {
    this.projectConfig = projectConfig;
    const pageConfigs = projectConfig.pages;
    const findIndex = pageConfigs.findIndex((el) => el.pagePath === '/' + this.router.url.substring(1));
    if (~findIndex) {
      this.pageConfig = pageConfigs[findIndex];
    }
  }

}
