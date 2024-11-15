import addLackQuantity from "../src/services/calculStickLackQuantity.js";
import { InputView } from "../src/views/InputView.js";

jest.mock("../src/views/InputView.js");

describe("프로모션 조건 부족한 상품 처리 테스트", () => {
  test("프로모션 조건이 부족할 경우, 사용자가 수량을 유지하는 선택을 한 경우 수량이 유지됩니다.", async () => {
    InputView.readPromotionNoDiscount.mockResolvedValue("Y");

    const testData = [
      {
        name: "탄산수",
        quantity: 10,
        generalQuan: 0,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1200,
        totalPrice: 12000,
        AddOneProduct: true,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1000,
        totalPrice: 7000,
        AddOneProduct: true,
      },
      {
        name: "콜라",
        quantity: 15,
        generalQuan: 10,
        promotionQuan: 10,
        realPromotionQuan: 9,
        price: 1000,
        totalPrice: 3000,
      },
      {
        name: "에너지바",
        quantity: 5,
        generalQuan: 5,
        promotionQuan: 0,
        price: 2000,
        totalPrice: 10000,
      },
    ];

    const result = await addLackQuantity(testData);

    expect(result[0].quantity).toBe(10);
    expect(result[0].LackPromoQuan).toBe(4);
  });
});
