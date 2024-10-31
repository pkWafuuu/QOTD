import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QViewAllComponent } from './q-view-all/q-view-all.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title:'QOTD'},
  { path: 'allquestions', component: QViewAllComponent, title:'QOTD'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
