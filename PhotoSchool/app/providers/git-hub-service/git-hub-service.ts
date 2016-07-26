import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GitHubService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  getRepos(username: string) {
    
        	
        let url :string = `https://api.github.com/users/${username}/repos`;
        return this.http.get(url);
         
    }

    
   
  
}

