import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validStringItemName = (inputObjArr, inventory) => {
  const itemsAvailable = inputObjArr.every((objArr) => {
    return inventory.some((product) => product.name === objArr.name);
  });

  if (!itemsAvailable) {
    throw new Error(ERR_MESSAGE_STRING.NON_EXISTENT_PRODUCT);
  }
  return true;
};