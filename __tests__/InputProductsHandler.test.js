import InputProductsHandler from "../src/modules/InputProductsHandler.js";

describe("초기 입력되는 품명과 수량에 대해 입력받고 검증하는 것을 테스트", () => {
  let inputHandler;

  beforeEach(() => {
    inputHandler = new InputProductsHandler();
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
