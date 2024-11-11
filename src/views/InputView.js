import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/inputMessages.js";

export const InputView = {
  async readProductsAndQuantity() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.PRODUCTS_AND_QUANTITY
    );
    const inputString = String(input);
    return inputString;
  },

  async readPromotionAddItem(productName) {
    const inputAnswer = await MissionUtils.Console.readLineAsync(
      `현재 ${productName}은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N) \n => `
    );
    const inputAnswerString = String(inputAnswer);
    return inputAnswerString;
  },

  async readPromotionNoDiscount(productName, productQuantity) {
    const inputAnswer = await MissionUtils.Console.readLineAsync(
      `현재 ${productName} ${productQuantity}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N) \n => `
    );
    const inputAnswerString = String(inputAnswer);
    return inputAnswerString;
  },

  async readMembershipDiscount() {
    const inputAnswer = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.MEMBERSHIP_DISCOUNT
    );
    const inputAnswerString = String(inputAnswer);
    return inputAnswerString;
  },

  async readRepurchaseWhether() {
    const inputAnswer = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.ADDITIONAL_PURCHASE
    );
    const inputAnswerString = String(inputAnswer);
    return inputAnswerString;
  },
};
