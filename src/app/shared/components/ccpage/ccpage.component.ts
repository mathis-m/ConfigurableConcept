import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ICCPageConfig} from '../../models/CCConfig/ICCPageConfig';
import {CCConfigLoaderService} from '../../services/config/ccconfig-loader.service';
import {ICCPage} from '../../models/CCBasics/ICCPage';
import {CCBuilderService} from '../../services/builder/ccbuilder.service';
import {ICCProjectConfig} from '../../models/CCConfig/ICCProjectConfig';

@Component({
  selector: 'app-ccpage',
  templateUrl: './ccpage.component.html',
  styleUrls: ['./ccpage.component.css']
})
export class CCPageComponent implements OnInit, ICCPage {
  public pageConfig: ICCPageConfig;
  loadPageConfig =  () => this.builderService.getProjectConfig().subscribe(el => this.setPageConfig(el));


  constructor(private router: Router, private builderService: CCBuilderService) {
    this.loadPageConfig();
  }

  ngOnInit() {
  }


  private setPageConfig(projectConfig: ICCProjectConfig) {
    const pageConfigs = projectConfig.pages;
    debugger;
    const findIndex = pageConfigs.findIndex(el => el.pagePath === this.router.url.substring(1));
    console.log(pageConfigs[findIndex]);
    if (~findIndex) {
      this.pageConfig = pageConfigs[findIndex];
    }
  }


}
