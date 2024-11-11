import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validLimitLength = (input, limitLength) => {
  if (input.length > limitLength) {
    throw new Error(
      `${ERR_MESSAGE_STRING.OVER_LENGTH_STRING_1}${limitLength}${ERR_MESSAGE_STRING.OVER_LENGTH_STRING_2}`
    );
  }

  return true;
};
