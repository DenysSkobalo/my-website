import { Component, OnInit } from '@angular/core';
import {IDataGithub} from "../../models/data";
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {

  data: IDataGithub;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getAll().subscribe(data => {
      // console.log(data);
      this.data = data;
    })
  }
}
