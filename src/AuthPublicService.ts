import { UAuthXClient } from ".";

export class AuthPublicService extends UAuthXClient {
  private apiUrls = {
    signUpUrl: "/auth/sign-up",
    signInUrl: "/auth/sign-in",
    verifyUserUrl: "/auth/verify-user",
  };

  async signUp(email: string, password: string) {
    const res = await fetch(this.setEndpoint(this.apiUrls.signUpUrl), {
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
    const res = await fetch(this.setEndpoint(this.apiUrls.signInUrl), {
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
    const res = await fetch(this.setEndpoint(this.apiUrls.verifyUserUrl), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    });

    const data = await res.json();

    return data;
  }
}
