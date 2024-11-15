const ERR_MESSAGE_STRING = {
  EMPTY_STRING_VALUE: "[ERROR] 입력값이 없습니다. 다시 입력해주세요.",
  OCCUR_ERROR: "[ERROR] 에러가 발생하였습니다. 정상값을 다시 입력해주세요.",
  INPUT_RULES:
    "[ERROR] 대괄호[] / 상품명 / 수량 / 콤마(,) 형태로 입력되지 않았습니다. 다시 입력해주세요.",
  IS_START_COMMA:
    "[ERROR] 콤마(,)가 먼저 입력될 수 없습니다. 다시 입력해주세요.",
  IS_END_COMMA:
    "[ERROR] 콤마(,)가 마지막으로 끝날 수 없습니다. 다시 입력해주세요",
  OVER_LENGTH_STRING_1: "[ERROR] 입력은 ",
  OVER_LENGTH_STRING_2: "글자를 넘어갈 수 없습니다. 다시 입력해주세요.",
  NOT_CORRECT_REGEX: `[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요.`,
  NON_EXISTENT_PRODUCT: `[ERROR] 존재하지 않는 상품입니다. 다시 입력해 주세요.`,
  OVER_PARCHASABLE_QUANTITY: `[ERROR] 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.`,
  INVALID_INPUT: `[ERROR] 잘못된 입력입니다. 다시 입력해 주세요.`,
  INPUT_TRY_TO_FIVE: `[ERROR] 5회 이상 잘 못 입력하여 초기화되었습니다. 다시 실행해 주세요.`,
};

export { ERR_MESSAGE_STRING };
