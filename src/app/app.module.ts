import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CCPageComponent } from './shared/components/ccpage/ccpage.component';
import { CCElementComponent } from './shared/components/ccelement/ccelement.component';
import { CCTextComponent } from './shared/components/cctext/cctext.component';

const routes: Routes = [
  { path: '**', component: CCPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CCPageComponent,
    CCElementComponent,
    CCTextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
