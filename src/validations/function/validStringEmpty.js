import { ERR_MESSAGE_STRING } from "../../constants/errorMessages.js";

export const validStringEmpty = (string) => {
  if (string == "") {
    throw new Error(ERR_MESSAGE_STRING.EMPTY_STRING_VALUE);
  }

  return true;
};
