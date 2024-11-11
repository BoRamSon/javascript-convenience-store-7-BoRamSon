import addPrice from "../src/services/calculStickPrice";

describe("사용자가 입력한 데이터를 기준으로 해당 제품의 단가를 가져오고 구매총합을 구하는 테스트", () => {
  test("검증을 마친 validatedInput을 받게 된다면 객체배열 뒤에 제품의 단가와 구매총합을 추가하는데 추가가 되지 않았을 경우 ", () => {
    const testValidatedInput = [
      {
        name: "콜라",
        quantity: 15,
        generalQuan: 10,
        promotionQuan: 10,
        realPromotionQuan: 9,
      },
      {
        name: "탄산수",
        quantity: 6,
        generalQuan: 0,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      {
        name: "에너지바",
        quantity: 5,
        generalQuan: 5,
        promotionQuan: 0,
      },
    ];

    const testOutput = [
      {
        name: "콜라",
        quantity: 15,
        generalQuan: 10,
        promotionQuan: 10,
        realPromotionQuan: 9,
        price: 1000,
        totalPrice: 15000,
      },
      {
        name: "탄산수",
        quantity: 6,
        generalQuan: 0,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1200,
        totalPrice: 7200,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1000,
        totalPrice: 6000,
      },
      {
        name: "에너지바",
        quantity: 5,
        generalQuan: 5,
        promotionQuan: 0,
        price: 2000,
      },
    ];

    expect(addPrice(testValidatedInput)).not.toEqual(testOutput);
  });

  test("검증을 마친 validatedInput을 받게 된다면 객체배열 뒤에 제품의 단가와 구매총합을 추가한다. ", () => {
    const testValidatedInput = [
      {
        name: "콜라",
        quantity: 15,
        generalQuan: 10,
        promotionQuan: 10,
        realPromotionQuan: 9,
      },
      {
        name: "탄산수",
        quantity: 6,
        generalQuan: 0,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      {
        name: "에너지바",
        quantity: 5,
        generalQuan: 5,
        promotionQuan: 0,
      },
    ];

    const testOutput = [
      {
        name: "콜라",
        quantity: 15,
        generalQuan: 10,
        promotionQuan: 10,
        realPromotionQuan: 9,
        price: 1000,
        totalPrice: 15000,
      },
      {
        name: "탄산수",
        quantity: 6,
        generalQuan: 0,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1200,
        totalPrice: 7200,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
        price: 1000,
        totalPrice: 6000,
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

    expect(addPrice(testValidatedInput)).toEqual(testOutput);
  });
});
