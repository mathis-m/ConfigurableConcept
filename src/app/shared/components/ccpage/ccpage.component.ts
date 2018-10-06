import { Component, OnInit } from '@angular/core';
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
export class CCPageComponent implements ICCPage, OnInit {

  public projectConfig: ICCProjectConfig;
  public pageConfig: ICCPageConfig;
  loadPageConfig = () => this.builderService.getProjectConfig().subscribe((el: any) => this.setPageConfig(el));


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
    const findIndex = pageConfigs.findIndex((el: any) => el.pagePath === this.router.url.substring(1));
    console.log(pageConfigs[findIndex]);
    if (~findIndex) {
      this.pageConfig = pageConfigs[findIndex];
    }
  }

}
