import { productsInventory } from "../models/Inventory.js";

const haveQuantityUtil = (findedArr) => {
  let quantity;
  if (findedArr) {
    quantity = findedArr.quantity;
  } else {
    quantity = 0;
  }
  return quantity;
};

const addGeneralQuantity = (validatedInput) => {
  const findGeneralQuantity = validatedInput.map((inputObj) => {
    const findedArr = productsInventory.find(
      (invenObj) =>
        invenObj.name === inputObj.name && invenObj.promotion == null
    );
    const generalQuan = haveQuantityUtil(findedArr);
    return { ...inputObj, generalQuan };
  });
  return findGeneralQuantity;
};

const addPromotionQuantity = (addGeneralQuantityResult) => {
  const findPromotionQuantity = addGeneralQuantityResult.map((inputObj) => {
    const findedArr = productsInventory.find(
      (invenObj) => invenObj.name === inputObj.name && invenObj.promotion == "탄산2+1"
    );
    const promotionQuan = haveQuantityUtil(findedArr);
    return { ...inputObj, promotionQuan };
  });
  return findPromotionQuantity;
};

const addPromotionQuanDivisionThree = (addWantServiceQuantity) => {
  const findQuantityAndPromotionQuan = addWantServiceQuantity.map((inputObj) => {
      if (inputObj.promotionQuan > 0) {
        const Quantity = Math.floor(inputObj.promotionQuan / 3);
        const realPromotionQuan = Quantity * 3;
        return { ...inputObj, realPromotionQuan };
      } else return { ...inputObj };
    });
  return findQuantityAndPromotionQuan;
};

const addInventoryQuantity = (validatedInput) => {
  const generalQuantity = addGeneralQuantity(validatedInput);
  const promodiontQuantity = addPromotionQuantity(generalQuantity);
  return addPromotionQuanDivisionThree(promodiontQuantity);
}

export default addInventoryQuantity;