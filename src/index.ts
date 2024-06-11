export class UAuthXClient {
  protected server_url: string;

  protected constructor(server_url: string) {
    this.server_url = server_url;
  }

  protected setEndpoint(endpoint: string) {
    return `${this.server_url}/${endpoint}`;
  }
}
