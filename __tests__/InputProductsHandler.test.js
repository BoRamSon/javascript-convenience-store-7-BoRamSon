import InputHandler from "../src/modules/InputHandler.js";

describe("InputHandler", () => {
  let inputHandler;

  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  it("검증에 성공하면 검증된 입력값을 반환.", async () => {
    const validatedInput = [
      {
        name: "콜라",
        quantity: 15,
      },
      {
        name: "탄산수",
        quantity: 6,
      },
      {
        name: "사이다",
        quantity: 6,
      },
      {
        name: "에너지바",
        quantity: 5,
      },
    ];
    inputHandler.validatingInput = jest.fn().mockResolvedValue(validatedInput);
    const result = await inputHandler.receiveInputDuringError();
    expect(result).toEqual(validatedInput);
  });
});
