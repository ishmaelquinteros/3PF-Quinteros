export class classUser {
  
  constructor(
    public id: string,
    public first_name: string,
    public last_name: string,
    public rol: string,
  ) {}

  get fullName() {
    return this.first_name + ' ' + this.last_name
  }
}
