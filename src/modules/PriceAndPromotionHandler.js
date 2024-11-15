import addInventoryQuantity from "../services/calculStickInvenQuantity.js";
import addPrice from "../services/calculStickPrice.js";
import addFreeOneProduct from "../services/calculStickAddOneProduct.js";
import addLackQuantity from "../services/calculStickLackQuantity.js";

class PriceAndPromotionHandler {
 constructor(validatedInput) {
  this.addInventoryQuantity = addInventoryQuantity; 
  this.addPrice = addPrice; 
  this.addFreeOneProduct = addFreeOneProduct; 
  this.addLackQuantity = addLackQuantity;
  this.validatedInput = validatedInput;
 }
 
 async run() {
  const inventoryQuantity = this.addInventoryQuantity(this.validatedInput);
  const totalPrice = this.addPrice(inventoryQuantity);
  const freeProduct = await this.addFreeOneProduct(totalPrice);
  return await this.addLackQuantity(freeProduct)
  // ... 제출로 인한 구현 중지
 }
}

export default PriceAndPromotionHandler;