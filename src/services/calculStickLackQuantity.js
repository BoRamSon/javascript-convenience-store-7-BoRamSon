import { InputView } from "../views/InputView.js";

const addFixedPrice = (addYouCanAddPromotionQuantity) => {
  const findQuantityAndPromotionQuan = addYouCanAddPromotionQuantity.map(
    (inputObj) => {
      if (inputObj.realPromotionQuan > 0 && 0 < inputObj.quantity && inputObj.quantity > inputObj.realPromotionQuan) {
        const noPromotionQuantity = inputObj.quantity - inputObj.realPromotionQuan;
        return { ...inputObj, IsLackPromQuan: true, LackPromoQuan: noPromotionQuantity };
      } else return { ...inputObj };
    });
  return findQuantityAndPromotionQuan;
};

const changePositionToFrontForLack = (validatedInput) => { 
  let filteredItems = validatedInput.filter(objArr => objArr.IsLackPromQuan === true); 
  let remainingItems = validatedInput.filter(objArr => objArr.IsLackPromQuan !== true); 
  let reorderedItems = filteredItems.concat(remainingItems);
  return reorderedItems;
}

const lackQuantityObjectArray = (changePositionToFrontForLack) => { 
  const whatLength = changePositionToFrontForLack.filter((inputObj) => {
    return inputObj.IsLackPromQuan == true;
  });
  return whatLength;
}

const inputAnswerLackQuantity = async (changePositionToFrontForLack, objectArray) => { 
  for (let i = 0; i < objectArray.length; i++) {
    const target = changePositionToFrontForLack[i]
    const targetName = changePositionToFrontForLack[i].name;
    const lackQuantity = changePositionToFrontForLack[i].LackPromoQuan;
    const inputAnswer = await InputView.readPromotionNoDiscount(targetName, lackQuantity); 
    if (inputAnswer === "N") { target.quantity -= target.LackPromoQuan; target.LackPromoQuan = 0;}
  }
  return changePositionToFrontForLack;
};

const addLackQuantity = async (addFreeOneProduct) => {
  const fixedPrice = addFixedPrice(addFreeOneProduct);
  const sort = changePositionToFrontForLack(fixedPrice);
  const length = lackQuantityObjectArray(sort);
  return await inputAnswerLackQuantity(sort, length);
};

export default addLackQuantity;