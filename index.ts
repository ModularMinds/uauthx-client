import axios, { AxiosInstance } from "axios";

class UAuthXClient {
  axiosInstance: AxiosInstance;

  constructor(server_url: string) {
    this.axiosInstance = axios.create({ baseURL: server_url });
  }

  async signUp(email: string, password: string) {
    
  }

  async signIn(email: string, password: string) {}
}
