import addInventoryQuantity from "../src/services/calculStickInvenQuantity";

describe("사용자가 입력한 데이터를 기준으로 재고에서 일반 재고수량과 프로모션 재고수량을 가져오는 테스트", () => {
  test("검증을 마친 validatedInput을 받게 된다면 객체배열 뒤에 일반 재고수량과 프로모션 재고수량을 추가하려고 하는데 promotion이 아닌 제품이 quantity를 불러온다면 틀리게 됩니다. ", () => {
    const testValidatedInput = [
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

    const testOutput = [
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
        promotionQuan: 5,
        realPromotionQuan: 3,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      { name: "에너지바", quantity: 5, generalQuan: 5, promotionQuan: 5 },
    ];

    expect(addInventoryQuantity(testValidatedInput)).not.toEqual(testOutput);
  });

  test("검증을 마친 validatedInput을 받게 된다면 객체배열 뒤에 일반 재고수량과 프로모션 재고수량을 추가한다. ", () => {
    const testValidatedInput = [
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

    const testOutput = [
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
        promotionQuan: 5,
        realPromotionQuan: 3,
      },
      {
        name: "사이다",
        quantity: 6,
        generalQuan: 7,
        promotionQuan: 8,
        realPromotionQuan: 6,
      },
      { name: "에너지바", quantity: 5, generalQuan: 5, promotionQuan: 0 },
    ];

    expect(addInventoryQuantity(testValidatedInput)).toEqual(testOutput);
  });
});
