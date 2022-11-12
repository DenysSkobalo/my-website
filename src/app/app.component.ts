import {Component, Input, OnInit} from '@angular/core';
import {GithubService} from "./services/github.service";
import {IDataGithub} from "./models/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   @Input() data: IDataGithub | any


  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getAll().subscribe(data => {
      console.log(data)
      this.data = data
    })
  }
}

