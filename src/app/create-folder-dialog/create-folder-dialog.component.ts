import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
})
export class CreateFolderDialogComponent implements OnInit {

  form: FormGroup;
  folderName: string;

  constructor(
    private formBuilder: FormBuilder,    
    private dialogRef: MatDialogRef<CreateFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 

      this.folderName = data.folderName;
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      folderName: ['', [Validators.required, Validators.maxLength(256)]]
    });
  }

  create() {
    if (this.form.invalid) {
        return;
    }

    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
