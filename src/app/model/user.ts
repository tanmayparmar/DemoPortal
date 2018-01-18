export class User {
  constructor(
    public sId: string,
    public groupId: string,
    public name: string,
    public lastname: string,
    public plannumber: string,
    public idNum: string,
    public postalCode: string,
    public email: string,
    public password: string,
    public confirmpassword: string,
    public status: string
  ) {}
}
