import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ICCPageConfig} from '../../models/CCBasics/CCConfig/ICCPageConfig';
import {CCConfigLoaderService} from '../../services/config/ccconfig-loader.service';
import {ICCPage} from '../../models/CCBasics/ICCPage';
import {CCBuilderService} from '../../services/builder/ccbuilder.service';
import {ICCProjectConfig} from '../../models/CCBasics/CCConfig/ICCProjectConfig';
import {ICCTextConfig} from '../../models/CCBasics/CCConfig/ICCTextConfig';

@Component({
  selector: 'app-ccpage',
  templateUrl: './ccpage.component.html',
  styleUrls: ['./ccpage.component.scss']
})
export class CCPageComponent implements OnInit, ICCPage {

  public projectConfig: ICCProjectConfig;
  public pageConfig: ICCPageConfig;
  loadPageConfig =  () => this.builderService.getProjectConfig().subscribe(el => this.setPageConfig(el));


  constructor(private router: Router, private builderService: CCBuilderService) {
    this.loadPageConfig();
    console.log(`re:${this.router.url}`);
  }

  ngOnInit() {
    this.router.events.subscribe(() => this.loadPageConfig());
  }

  private setPageConfig(projectConfig: ICCProjectConfig) {
    this.projectConfig = projectConfig;
    const pageConfigs = projectConfig.pages;
    const findIndex = pageConfigs.findIndex(el => el.pagePath === this.router.url.substring(1));
    console.log(pageConfigs[findIndex]);
    if (~findIndex) {
      this.pageConfig = pageConfigs[findIndex];
    }
  }


}
