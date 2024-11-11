import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validStringQuantity = (inputObjArr, inventory) => {
  const quantityAvailable = inputObjArr.every((objArr) => {
    return inventory.some((product) => product.name === objArr.name && product.quantity >= objArr.quantity
    );
  });
  if (!quantityAvailable) {
    throw new Error(ERR_MESSAGE_STRING.OVER_PARCHASABLE_QUANTITY);
  }
  return true;
};