import { validLimitLength } from "../src/validations/function/validLimitLength.js";

describe("입력값의 길이를 제한하는 테스트", () => {
  test("20자 이상 초과하면 ERROR를 반환", () => {
    const testInput = "[콜라-3], [에너지바-4], [에너지바-4], [에너지바-4]";
    const testLimitLength = 20
    expect(() => validLimitLength(testInput, testLimitLength)).toThrow(
      "[ERROR] 입력은 20글자를 넘어갈 수 없습니다. 다시 입력해주세요."
    );
  });

  test("20자 이내로 입력될 경우 true반환", () => {
    const testInput = "[콜라-3], [에너지바-4]";
    const testLimitLength = 20
    expect(validLimitLength(testInput, testLimitLength)).toBe(true);
  });
});
