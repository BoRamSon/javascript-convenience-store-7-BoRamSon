import addFreeOneProduct from "../src/services/calculStickAddOneProduct";
import { InputView } from "../src/views/InputView.js";

jest.mock("../src/views/InputView.js");

describe("추가된 데이터를 기반으로 프로모션을 받을 수 있는 수량에 맞게 구매하였는지 확인하고 무료로 가져갈 수 있는지 테스트", () => {
  test("프로모션 조건을 만족하여 제품 수량이 1 증가 합니다.", async () => {
    InputView.readPromotionAddItem.mockResolvedValue("Y");

    const addTotalPriceResult = [
      { name: "콜라", quantity: 2, realPromotionQuan: 5, AddOneProduct: true },
    ];

    const result = await addFreeOneProduct(addTotalPriceResult);
    expect(result[0].quantity).toBe(3);
  });

  test("프로모션 조건을 만족하지 않아 제품 수량이 증가하지 않습니다.", async () => {
    InputView.readPromotionAddItem.mockResolvedValue("N");

    const addTotalPriceResult = [
      { name: "콜라", quantity: 2, realPromotionQuan: 5, AddOneProduct: true },
    ];

    const result = await addFreeOneProduct(addTotalPriceResult);
    expect(result[0].quantity).toBe(2);
  });
});