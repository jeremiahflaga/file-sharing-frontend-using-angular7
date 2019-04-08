export class File {
  id: number;
  name: string;
  type: string;
  last_modified: Date;

  constructor(id: number, name: string, type: string, last_modified: Date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.last_modified = last_modified;    
  }
}