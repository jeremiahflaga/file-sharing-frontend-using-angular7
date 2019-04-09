import { Component, OnInit } from '@angular/core';
import { File } from '@app/_models';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
})
export class FileBrowserComponent implements OnInit {

  files: Array<FileVM> = [];
  selectedFiles: Map<number, File> = new Map();

  constructor() { }

  ngOnInit() {
    this.files.push(new FileVM(new File(1, 'Project-1.pptx', 'Powerpoint', new Date())));
    this.files.push(new FileVM(new File(2, 'Project-2.pptx', 'Powerpoint', new Date())));
    this.files.push(new FileVM(new File(3, 'Photos', 'Folder', new Date())));
  }

  fileTrackByFn(index: number, item: File) {
    return item.id; // unique id corresponding to the item
  }

  fileCheckChanged(file: FileVM, event) {
    if (event.target.checked) {      
      this.selectedFiles.set(file.id, file);
    } else {
      if (this.selectedFiles.has(file.id)) {
        this.selectedFiles.delete(file.id);
      }
    }
  }
}

class FileVM {  
  id: number;
  name: string;
  type: string;
  last_modified: Date;

  isSelected: boolean = false;

  constructor(file: File) {
    this.id = file.id;
    this.name = file.name;
    this.type = file.type;
    this.last_modified = file.last_modified; 
  }
}
