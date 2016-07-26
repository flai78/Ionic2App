import {Component} from '@angular/core';
import { GitHubService } from '../../providers/git-hub-service/git-hub-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[GitHubService]
})
export class HomePage {
  
  public time : Date;
  public username: string;
  public foundRepos: any;
  
  constructor(private github: GitHubService) {
    this.time = new Date();
    setInterval(()=> this.time = new Date(), 1000);
  }

getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

}
