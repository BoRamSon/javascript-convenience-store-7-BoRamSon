import { validInputAnswer } from "../src/validations/validInputAnswer";

describe("(Y/N)에 대한 답변이 잘 입력되었는지 확인하는 Validation", () => {
  test("다른 알파벳이 입력되면 ERROR를 반환합니다.", () => {
    const testInput = "A";
    expect(() => validInputAnswer(testInput)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("소문자를 입력하면 ERROR를 반환합니다.", () => {
    const testInput = "y";
    expect(() => validInputAnswer(testInput)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("1글자 이상 입력 시 ERROR를 반환합니다.", () => {
    const testInput = "YY";
    expect(() => validInputAnswer(testInput)).toThrow(
      "ERROR] 입력은 1글자를 넘어갈 수 없습니다. 다시 입력해주세요."
    );
  });

  test("정상적인 입력값(Y)일 경우 true반환", () => {
    const testInput = "Y";
    expect(validInputAnswer(testInput)).toBe(true);
  });

  test("정상적인 입력값(N)일 경우 true반환", () => {
    const testInput = "N";
    expect(validInputAnswer(testInput)).toBe(true);
  });
});
