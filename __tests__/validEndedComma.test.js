import { validEndedComma } from "../src/validations/function/validEndedComma";

describe("','를 마지막에 입력할 경우 확인하는 테스트", () => {
  test("입력값이 ','로 끝날 경우 ERROR 반환", () => {
    const testInput = "[콜라-3], [에너지바],,";
    expect(() => validEndedComma(testInput)).toThrow(
      "[ERROR] 콤마(,)가 마지막으로 끝날 수 없습니다. 다시 입력해주세요"
    );
  });

  test("입력값 마지막에 ','가 없을 경우 true 반환", () => {
    const testInput = "[콜라-3], [에너지바]";
    expect(validEndedComma(testInput)).toBe(true);
  });
});
