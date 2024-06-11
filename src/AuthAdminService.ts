import { UAuthXClient } from ".";

export class AuthAdminService extends UAuthXClient {
  admin: string;
  password: string;

  private basicAuthToken: string;
  private apiUrls = {
    listUsersUrl: "/auth/sign-up",
  };

  constructor(server_url: string, admin: string, password: string) {
    super(server_url);
    this.admin = admin;
    this.password = password;
    this.basicAuthToken = `Basic ${Buffer.from(`${admin}:${password}`).toString(
      "base64"
    )}`;
  }

  async listUsers() {
    const res = await fetch(this.setEndpoint(this.apiUrls.listUsersUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.basicAuthToken,
      },
    });

    const data = await res.json();

    return data;
  }
}
