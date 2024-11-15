import { productsInventory } from "../models/Inventory.js";

const addItemPrice = (addPromotionQuantityResult) => {
  const findItemPrice = addPromotionQuantityResult.map((inputObj) => {
    const findedArr = productsInventory.find(
      (invenObj) => invenObj.name === inputObj.name
    );
    const price = findedArr.price;
    return { ...inputObj, price };
  });
  return findItemPrice;
};

const addTotalPrice = (addItemPriceResult) => {
  const findQuantityAndPrice = addItemPriceResult.map((inputObj) => {
    const totalPrice = inputObj.price * inputObj.quantity;
    return { ...inputObj, totalPrice };
  });
  return findQuantityAndPrice;
};

const addPrice = (addInventoryQuantity) => {
  const itemPrice = addItemPrice(addInventoryQuantity);
  return addTotalPrice(itemPrice);
};

export default addPrice;