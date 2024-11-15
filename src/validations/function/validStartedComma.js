import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validStartedComma = (array) => {
  if (/^,/g.test(array)) {
    throw new Error(ERR_MESSAGE_STRING.IS_START_COMMA);
  }
  return true;
};
