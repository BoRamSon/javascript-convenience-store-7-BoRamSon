import { OutputView } from "../views/OutputView.js";
import { productsInventory } from "../models/Inventory.js";

class printGreetingAndInventory {
  
  run() {
    this.greetingString();
    this.inventoryAlertString();
    this.inventory();
  }

  greetingString() {
    OutputView.printGreeting();
  }

  inventoryAlertString() {
    OutputView.printProducts();
  }

  inventory() {
    productsInventory.forEach((product) => {
      const { name, price, quantity, promotion } = product;
      const quantityText = quantity > 0 ? `${quantity}개` : "재고 없음";
      const promotionText = promotion ? ` ${promotion}` : "";
      const productString = `- ${name} ${price.toLocaleString()}원 ${quantityText}${promotionText}`;
      OutputView.printProductString(productString);
    });
  }
}

export default printGreetingAndInventory;