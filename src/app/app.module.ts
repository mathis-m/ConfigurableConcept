import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CCElementComponent } from './shared/components/ccelement/ccelement.component';
import { CCPageComponent } from './shared/components/ccpage/ccpage.component';
import { CCPictureComponent } from './shared/components/ccpicture/ccpicture.component';
import { CCTextComponent } from './shared/components/cctext/cctext.component';
import { CCWelcomeComponent } from './shared/components/ccwelcome/ccwelcome.component';



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
    CCPictureComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
