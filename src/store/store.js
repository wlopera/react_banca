import { makeAutoObservable } from "mobx";
class Store {
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  initMessages = () => {
    this.messages = [];
  };

  setMessages = (data) => {
    this.messages = [...data];
  };
}

const store = new Store();

export default store;
