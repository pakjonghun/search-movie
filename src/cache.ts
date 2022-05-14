export class cacheStore<D> {
  private cache: D[];
  public cacheName: string;

  constructor(cacheName: string) {
    this.cache = [];
    this.cacheName = cacheName;
  }

  private isDataExist() {
    return Boolean(this.cache.length);
  }

  set setMultiData(data: D[]) {
    this.cache = [...this.cache, ...data];
  }

  set setSingleData(data: D) {
    this.cache = [...this.cache, data];
  }

  get getAllData() {
    if (this.isDataExist()) return this.cache;
    else return null;
  }
}
