import { validStartedComma } from "../src/validations/function/validStartedComma";

describe("','를 먼저 입력할 경우 확인하는 테스트", () => {
  test("입력값이 ','로 시작될 경우 ERROR 반환", () => {
    const testInput = ",[콜라-3], [에너지바],";
    expect(() => validStartedComma(testInput)).toThrow(
      "[ERROR] 콤마(,)가 먼저 입력될 수 없습니다. 다시 입력해주세요."
    );
  });

  test("입력값이 앞에 ','가 없을 경우 true 반환", () => {
    const testInput = "[콜라-3], [에너지바],";
    expect(validStartedComma(testInput)).toBe(true);
  });
});
