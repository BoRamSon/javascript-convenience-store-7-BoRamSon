import { MissionUtils } from "@woowacourse/mission-utils";
import InputProductsHandler from "../modules/InputProductsHandler.js";
import PrintGreetingAndInventory from "../modules/PrintGreatingAndInventory.js";

class StoreController {
  constructor() {
    this.printGreetingAndInventory = new PrintGreetingAndInventory();
    this.inputProductsHandler = new InputProductsHandler();
  }

  startStore() {
    this.printGreetingAndInventory.run();
    MissionUtils.Console.print("");
    this.inputProductsHandler.receiveInputDuringError();
  }
}

export default StoreController;
