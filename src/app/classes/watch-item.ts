export class WatchItem {
  public name: string;
  public id: string;
  public fetch: any = {};

  constructor(name: string, id: string, fetch: any) {
    this.id = id;
    this.name = name;
    this.fetch = fetch;
  }
}
