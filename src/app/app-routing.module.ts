import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {AboutGithubComponent} from "./pages/about-github/about-github.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutMeComponent},
  { path: 'github', component: AboutGithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
