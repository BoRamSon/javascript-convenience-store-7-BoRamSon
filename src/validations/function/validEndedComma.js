import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validEndedComma = (array) => {
  if (/,$/g.test(array)) {
    throw new Error(ERR_MESSAGE_STRING.IS_END_COMMA);
  }

  return true;
};
