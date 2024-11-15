import { validStringItemName } from "../src/validations/function/validStringItemName.js";

describe("구매할 상품과 수량 형식 확인하는 테스트", () => {
  test("존재하지 않는 상품을 입력하였습니다.", () => {
    const testObjArr = [
      { name: "콜라", quantity: 2 },
      { name: "포도주스", quantity: 5 },
      { name: "고구마칩", quantity: 3 },
      { name: "초코바", quantity: 2 },
    ];
    const testItem = [
      { name: "콜라", price: 1000, quantity: 10, promotion: "탄산2+1" },
      { name: "콜라", price: 1000, quantity: 10, promotion: null },
      { name: "사이다", price: 1000, quantity: 8, promotion: "탄산2+1" },
      { name: "사이다", price: 1000, quantity: 7, promotion: null },
      { name: "오렌지주스", price: 1800, quantity: 9, promotion: "MD추천상품" },
      { name: "탄산수", price: 1200, quantity: 5, promotion: "탄산2+1" },
      { name: "물", price: 500, quantity: 10, promotion: null },
      { name: "비타민워터", price: 1500, quantity: 6, promotion: null },
      { name: "감자칩", price: 1500, quantity: 5, promotion: "반짝할인" },
      { name: "감자칩", price: 1500, quantity: 5, promotion: null },
      { name: "초코바", price: 1200, quantity: 5, promotion: "MD추천상품" },
      { name: "초코바", price: 1200, quantity: 5, promotion: null },
      { name: "에너지바", price: 2000, quantity: 5, promotion: null },
      { name: "정식도시락", price: 6400, quantity: 8, promotion: null },
      { name: "컵라면", price: 1700, quantity: 1, promotion: "MD추천상품" },
      { name: "컵라면", price: 1700, quantity: 10, promotion: null },
    ];
    expect(() => validStringItemName(testObjArr, testItem)).toThrow(
      "[ERROR] 존재하지 않는 상품입니다. 다시 입력해 주세요."
    );
  });

  test("정상적으로 잘 입력하였습니다.", () => {
    const testObjArr = [
      { name: "콜라", quantity: 2 },
      { name: "오렌지주스", quantity: 5 },
      { name: "감자칩", quantity: 3 },
      { name: "초코바", quantity: 2 },
    ];
    const testItem = [
      { name: "콜라", price: 1000, quantity: 10, promotion: "탄산2+1" },
      { name: "콜라", price: 1000, quantity: 10, promotion: null },
      { name: "사이다", price: 1000, quantity: 8, promotion: "탄산2+1" },
      { name: "사이다", price: 1000, quantity: 7, promotion: null },
      { name: "오렌지주스", price: 1800, quantity: 9, promotion: "MD추천상품" },
      { name: "탄산수", price: 1200, quantity: 5, promotion: "탄산2+1" },
      { name: "물", price: 500, quantity: 10, promotion: null },
      { name: "비타민워터", price: 1500, quantity: 6, promotion: null },
      { name: "감자칩", price: 1500, quantity: 5, promotion: "반짝할인" },
      { name: "감자칩", price: 1500, quantity: 5, promotion: null },
      { name: "초코바", price: 1200, quantity: 5, promotion: "MD추천상품" },
      { name: "초코바", price: 1200, quantity: 5, promotion: null },
      { name: "에너지바", price: 2000, quantity: 5, promotion: null },
      { name: "정식도시락", price: 6400, quantity: 8, promotion: null },
      { name: "컵라면", price: 1700, quantity: 1, promotion: "MD추천상품" },
      { name: "컵라면", price: 1700, quantity: 10, promotion: null },
    ];
    expect(validStringItemName(testObjArr, testItem)).toBe(true);
  });
});
