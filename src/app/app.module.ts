import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CCPageComponent } from './shared/components/ccpage/ccpage.component';
import { CCElementComponent } from './shared/components/ccelement/ccelement.component';
import { CCTextComponent } from './shared/components/cctext/cctext.component';
import { CCWelcomeComponent } from './shared/components/ccwelcome/ccwelcome.component';
import { CCPictureComponent } from './shared/components/ccpicture/ccpicture.component';

const routes: Routes = [
  { path: '**', component: CCPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CCPageComponent,
    CCElementComponent,
    CCTextComponent,
    CCWelcomeComponent,
    CCPictureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
