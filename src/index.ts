export class UAuthXClient {
  server_url: string;

  constructor(server_url: string) {
    this.server_url = server_url;
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
}
