import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validStringRegEx = (inputProducts, regExPattern) => {
  const inputDelSpace = inputProducts.replace(/ /g, "");

  const validInclusion = regExPattern.test(inputDelSpace);

  if (!validInclusion) {
    throw new Error(ERR_MESSAGE_STRING.NOT_CORRECT_REGEX);
  }
  return true;
};
