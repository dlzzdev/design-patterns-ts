class Store {
  private data: any[] = [];

  private static instance: Store;

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  public pushDate(newData: any) {
    if (!this.data) {
      this.data = [];
    }

    this.data.push(newData);
  }

  public getData(): any[] {
    return this.data;
  }
}

function myReactApp() {
  const store = Store.getInstance();
  store.pushDate("Hello World");
  console.log(store.getData());

  const store2 = Store.getInstance();
  store2.pushDate("Hello World 2");

  console.log(store === store2);
}

myReactApp();
