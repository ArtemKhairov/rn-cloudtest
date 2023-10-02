import { makeAutoObservable } from "mobx";

class CounterStore {
  coins = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCoins(coins) {
    this.coins = coins;
  }

  getCoins() {
    return this.coins;
  }
}

export const counterStore = new CounterStore();
