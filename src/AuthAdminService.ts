import { UAuthXClient } from ".";

export class AuthAdminService extends UAuthXClient {
  admin: string;
  password: string;

  constructor(server_url: string, admin: string, password: string) {
    super(server_url);
    this.admin = admin;
    this.password = password;
  }
}
