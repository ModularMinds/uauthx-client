import { UAuthXClient } from ".";

export class AuthPublicService extends UAuthXClient {
  constructor(server_url: string) {
    super(server_url);
  }

  async signUp(email: string, password: string) {
    const res = await fetch(`${this.server_url}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    return data;
  }

  async signIn(email: string, password: string) {
    const res = await fetch(`${this.server_url}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    return data;
  }

  async verifyUser(authorization: string) {
    const res = await fetch(`${this.server_url}/auth/verify-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ authorization }),
    });

    const data = await res.json();

    return data;
  }
}
