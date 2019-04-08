import { Component, OnInit } from '@angular/core';
import { File } from '@app/_models';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {

  files: Array<File> = [];

  constructor() { }

  ngOnInit() {
    this.files.push({ id: 1, name: 'Project-1.pptx', type: 'Powerpoint', last_modified: new Date()})
    this.files.push({ id: 2, name: 'Project-2.pptx', type: 'Powerpoint', last_modified: new Date()})
    this.files.push({ id: 3, name: 'Photos', type: 'Folder', last_modified: new Date()})
  }

  fileTrackByFn(index: number, item: File) {
    return item.id; // unique id corresponding to the item
  }
}
