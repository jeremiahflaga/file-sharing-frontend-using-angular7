import { Component, OnInit } from '@angular/core';
import { File } from '@app/_models';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CreateFolderDialogComponent } from '@app/create-folder-dialog/create-folder-dialog.component';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
})
export class FileBrowserComponent implements OnInit {

  files: Array<FileVM> = [];

  constructor(private dialog: MatDialog) { }

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
      file.isSelected = true;
    } else {
      file.isSelected = false;
    }
  }

  selectAllFiles(event) {
    if (event.target.checked) {      
      this.files.forEach(file => {
        file.isSelected = true;
      });
    } else {
      this.files.forEach(file => {        
        file.isSelected = false;
      });
    }
  }

  getSelectedFiles() {
    return this.files.filter(file => file.isSelected === true);
  }
  
  hasSelectedFiles() {
    return this.getSelectedFiles().length > 0;
  }

  openCreateFolderDialog() {    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      folderName: 'new folder'
    };

    const dialogRef = this.dialog.open(CreateFolderDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
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
