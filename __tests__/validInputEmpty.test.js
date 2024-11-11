import { validStringEmpty } from "../src/validations/function/validStringEmpty.js";

describe("입력값의 빈값인지 검증하는 테스트", () => {
  test("값이 없다면 ERROR 반환", () => {
    const testInput = "";
    expect(() => validStringEmpty(testInput)).toThrow(
      "[ERROR] 입력값이 없습니다. 다시 입력해주세요.",
    );
  });

  test("입력값이 존재할 경우 true 반환", () => {
    const testInput = "[콜라-3], [에너지바-4]";
    expect(validStringEmpty(testInput)).toBe(true);
  });
});
