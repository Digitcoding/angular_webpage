import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  name = "parameswari";
  title = "practiceInbuildpipes";
  today = new Date();
  number = 234;
  obj = { 'name': 'param', 'age': 23 };
  array = [23, 34, 56, 23];
  // userdefined filesize 1kb=1024 1MB=1024*1024 1GB=1024*1024*1024 files are in format of binary
file=(1024*1024)+2;
  searchTerm!: string;
  results: { id: number; summary: string; }[];
  constructor() {
    this.results = [{ id: 1, summary: "These are the results for the searched text" },
    { id: 2, summary: "Here are some more results you searched for" },
    { id: 3, summary: "Searching for answers, are we?" },
    { id: 4, summary: "What more could you ask for?" }
    ];
  }
  updateSearch(e: any) {
    this.searchTerm = e.target.value
    console.log('searchTerm:', this.searchTerm);
  }
 uname!:string;
  user=[
    {uname:'keerthi',year:'2002'},
    {uname:'sindhu',year:'2001'},
    {uname:'aish',year:'2001'},
  ];
  add(){
    this.user=[...this.user,({uname:this.uname,year:'2002'})];
  // this.user.push({uname:this.uname,year:'2002'});
    console.log (this.user);
  }
}
