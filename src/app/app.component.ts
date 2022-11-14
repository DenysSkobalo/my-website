import {Component, OnInit} from '@angular/core';

import {GithubService} from "./services/github.service";
import {IDataGithub} from "./models/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  data: IDataGithub;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getAll().subscribe(data => {
      // console.log(data);
      this.data = data;
    })
  }
}

