export class PostResetPassword {
  constructor(
    public email: string,
    public password: string,
    public confirmpassword: string,
    public code: string
  ) {}
}
