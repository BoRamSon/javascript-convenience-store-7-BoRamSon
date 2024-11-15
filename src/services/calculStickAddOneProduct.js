import { InputView } from "../views/InputView.js";

const youCanAddPromotionQuantity = (addTotalPriceResult) => {
  const findQuantityAndPromotionQuan = addTotalPriceResult.map((inputObj) => {
    if (
      inputObj.realPromotionQuan > 0 && inputObj.quantity < inputObj.realPromotionQuan && inputObj.quantity % 3 === 2
    ) {
      return { ...inputObj, AddOneProduct: true };
    } else return { ...inputObj };
  });
  return findQuantityAndPromotionQuan;
};

const changePositionToFrontForAdd = (validatedInput) => {
  let filteredItems = validatedInput.filter(
    (objArr) => objArr.AddOneProduct === true
  );
  let remainingItems = validatedInput.filter(
    (objArr) => objArr.AddOneProduct !== true
  );
  let reorderedItems = filteredItems.concat(remainingItems);
  return reorderedItems;
};

const addOneProductObjectArray = (changePositionToFrontForAdd) => {
  const whatLength = changePositionToFrontForAdd.filter((inputObj) => {
    return inputObj.AddOneProduct == true;
  });
  return whatLength;
};

const inputAnswerAddOne = async (changePositionToFrontForAdd, objectArray) => {
  for (let i = 0; i < objectArray.length; i++) {
    const target = changePositionToFrontForAdd[i];
    const targetName = changePositionToFrontForAdd[i].name;
    const inputAnswer = await InputView.readPromotionAddItem(targetName);
    if (inputAnswer === "Y") target.quantity += 1;
  }
  return changePositionToFrontForAdd;
};

const addFreeOneProduct = async (addTotalPriceResult) => {
  const isFree = youCanAddPromotionQuantity(addTotalPriceResult);
  const sort = changePositionToFrontForAdd(isFree);
  const length = addOneProductObjectArray(sort);
  return await inputAnswerAddOne(sort, length);
};

export default addFreeOneProduct;
