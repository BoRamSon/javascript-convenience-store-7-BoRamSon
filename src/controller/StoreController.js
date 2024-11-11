import { MissionUtils } from "@woowacourse/mission-utils";
import InputProductsHandler from "../modules/InputProductsHandler.js";
import PrintGreetingAndInventory from "../modules/PrintGreatingAndInventory.js";
import PriceAndPromotionHandler from "../modules/PriceAndPromotionHandler.js";


class StoreController {
  constructor() {
    this.printGreetingAndInventory = new PrintGreetingAndInventory();
    this.inputProductsHandler = new InputProductsHandler();
    this.priceAndPromotionHandler = new PriceAndPromotionHandler();
  }

  async startStore() {
    this.printGreetingAndInventory.run();
    MissionUtils.Console.print("");
    const validatedInput = await this.inputProductsHandler.receiveInputDuringError();
    // await this.priceAndPromotionHandler.run(validatedInput);
    // ... 제출로 인한 구현 중지
  }
}

export default StoreController;
