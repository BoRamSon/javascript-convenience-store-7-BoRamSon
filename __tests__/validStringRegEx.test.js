import { validStringRegEx } from "../src/validations/function/validStringRegEx.js";

describe("구매할 상품과 수량 형식 확인하는 테스트", () => {
  test("빈 문자열 입력 시 [ERROR]Message를 반환한다.", () => {
    const testInput = "";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("상품 형식이 맞지 않는 경우 [ERROR]Message를 반환한다.", () => {
    const testInput = "[콜라-3], [에너지바]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("수량이 음수인 경우 [ERROR]Message를 반환한다.", () => {
    const testInput = "[콜라--3], [에너지바-5]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("대괄호 형식이 틀린 경우 [ERROR]Message를 반환한다.", () => {
    const testInput = "콜라-3], [에너지바-5]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("쉼표 없이 여러 항목이 있을 경우 [ERROR]Message를 반환한다.", () => {
    const testInput = "[콜라-3] [에너지바-5]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("쉼표 없이 여러 항목이 있을 경우 [ERROR]Message를 반환한다.", () => {
    const testInput = "[콜라-3] [에너지바-5]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(() => validStringRegEx(testInput, regExPattern)).toThrow(
      "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요."
    );
  });

  test("올바른 형식으로 입력하면 validation 통과되고 최종 true를 반환한다.", () => {
    const testInput = "[콜라-3], [에너지바-5]";
    const regExPattern = /^\[([가-힣]+)-(\d+)\](,\[([가-힣]+)-(\d+)\])*$/;
    expect(validStringRegEx(testInput, regExPattern)).toBe(true);
  });
});


/*
🟢 테스트 코드에서 toThrow로 반환을 사용할 경우,
() =>와 같은 함수 래퍼를 사용해야 하는 이유는 JavaScript에서 예외 처리 방식과 관련이 있습니다.
toThrow는 특정 함수를 실행했을 때 예외가 발생하는지 확인하는 메서드입니다. 
예외가 발생하려면 함수가 실제로 실행되어야 하므로, Jest는 이 함수를 실행하기 위해 () =>로 감싸주기를 요구합니다.

() => 없이 함수 실행: 
  expect(validStringRegEx(testInput)).toThrow(...) 처럼 작성하면, validStringRegEx(testInput)이 즉시 실행됩니다. 만약 이 호출이 예외를 던지면 expect까지 도달하지 않고 테스트는 실패하게 됩니다.

() =>로 감싸기: 
  expect(() => validStringRegEx(testInput, regExPattern)).toThrow(...)와 같이 작성하면, Jest는 validStringRegEx(testInput)을 즉시 실행하지 않고 래퍼 함수 (() => {...})로 감싸진 함수가 호출될 때까지 기다립니다. 
  이렇게 하면 Jest는 그 안에서 예외가 발생하는지를 확인할 수 있습니다.

*/