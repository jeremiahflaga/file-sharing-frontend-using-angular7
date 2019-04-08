import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {

  files: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.files.push({ name: 'Project-1.pptx', type: 'Powerpoint', last_modified: '12/09/2018'})
    this.files.push({ name: 'Project-2.pptx', type: 'Powerpoint', last_modified: '01/01/2019'})
    this.files.push({ name: 'Photos', type: 'Folder', last_modified: '04/05/2019'})
  }
  
}
