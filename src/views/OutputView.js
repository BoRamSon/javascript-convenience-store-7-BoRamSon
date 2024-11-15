import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/outputMessages.js";

export const OutputView = {
  printGreeting() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.GREETING);
  },

  printProducts() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.INVENTORY_ALERT);
  },

  printProductString(productString) { 
    MissionUtils.Console.print(productString); 
  },

  printReceipt() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.RECEIPT);
  },
};
