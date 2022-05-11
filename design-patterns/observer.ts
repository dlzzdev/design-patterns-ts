interface Observer {
  update(): void;
}

interface Store {
  addCustomerToNotificationPool(observers: Observer): void;
  removeCustomerFromNotificationPool(observers: Observer): void;
  notifyCustomer(): void;
}

class AppleStore implements Store {
  private observers: Observer[] = [];

  public addCustomerToNotificationPool(observers: Observer) {
    this.observers.push(observers);
  }

  public removeCustomerFromNotificationPool(observers: Observer) {
    const index = this.observers.indexOf(observers);
    if (index) {
      throw new Error("Observer not found");
    }

    this.observers.splice(index, 1);
  }

  public notifyCustomer() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class Customer1 implements Observer {
  update(): void {
    console.log("Customer1 notified");
  }
}

class Customer2 implements Observer {
  update(): void {
    console.log("Customer2 notified");
  }
}

class Customer3 implements Observer {
  update(): void {
    console.log("Customer3 notified");
  }
}

const appleStore = new AppleStore();

const customer1 = new Customer1();
appleStore.addCustomerToNotificationPool(customer1); // Customer1 added to notification pool

appleStore.notifyCustomer(); // Customer1 notified

const customer2 = new Customer2();
appleStore.addCustomerToNotificationPool(customer2);

appleStore.notifyCustomer(); // Customer1 notified Customer2 notified

appleStore.removeCustomerFromNotificationPool(customer1); // Customer1 removed from notification pool

appleStore.notifyCustomer(); // Customer2 notified
