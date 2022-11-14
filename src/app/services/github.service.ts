import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDataGithub} from "../models/data";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IDataGithub> {
    return this.http.get<IDataGithub>('https://api.github.com/users/DenysSkobalo');
  }

}
