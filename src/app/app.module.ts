import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { QOfTheDayComponent } from './q-of-the-day/q-of-the-day.component';
import { HttpClientModule } from '@angular/common/http';
import { QViewAllComponent } from './q-view-all/q-view-all.component';
import { FormsModule } from '@angular/forms';
import { QViewComponent } from './q-view-all/q-view/q-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    QOfTheDayComponent,
    QViewAllComponent,
    QViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
