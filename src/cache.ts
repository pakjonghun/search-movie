export class CacheStore {
  static instance: CacheStore;
  private cache: Record<string, any> = {};
  public cacheName: string;

  constructor(cacheName: string) {
    this.cacheName = cacheName;
  }

  public static getInstance() {
    return this.instance || (this.instance = new this('Cache'));
  }

  private isDataExist() {
    return Boolean(this.cache.length);
  }

  set setData({ key, data }: { key: string; data: any }) {
    this.cache[key] = data;
  }

  get getAllData() {
    if (this.isDataExist()) return this.cache;
    else return null;
  }

  getData(key: string) {
    return this.cache[key];
  }
}
