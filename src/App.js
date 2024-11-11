import StoreController from "./controller/StoreController.js";

class App {
  constructor() {
    this.storeController = new StoreController();
  }
  async run() {
    this.storeController.startStore();
  }
}

export default App;
