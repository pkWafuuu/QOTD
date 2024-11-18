import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { QOfTheDayComponent } from './q-of-the-day/q-of-the-day.component';
import { HttpClientModule } from '@angular/common/http';
import { QViewAllComponent } from './q-view-all/q-view-all.component';
import { QViewComponent } from './q-view-all/q-view/q-view.component';
import { QAddComponent } from './q-add/q-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    QOfTheDayComponent,
    QViewAllComponent,
    QViewComponent,
    QAddComponent,
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
