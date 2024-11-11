import { validStringEmpty } from "./function/validStringEmpty.js";
import { validStartedComma } from "./function/validStartedComma.js";
import { validEndedComma } from "./function/validEndedComma.js";
import { validLimitLength } from "./function/validLimitLength.js";
import { validStringRegEx } from "./function/validStringRegEx.js";
import { validStringItemName } from "./function/validStringItemName.js";
import { validStringQuantity } from "./function/validStringQuantity.js";

export const validInputProducts = (inputString, inputObjArr, products) => {
  validStringEmpty(inputString);
  validStartedComma(inputString);
  validEndedComma(inputString);
  validLimitLength(inputString, 50);
  const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
  validStringRegEx(inputString, regExPattern);
  validStringItemName(inputObjArr, products);
  validStringQuantity(inputObjArr, products);
};