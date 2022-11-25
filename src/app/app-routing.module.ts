import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {WorkComponent} from "./pages/work/work.component";



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutMeComponent},
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
