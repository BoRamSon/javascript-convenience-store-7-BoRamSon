export const convertObjArr = (input) => {
  const parseInputToArray = input.split(","); // 여기서 2차원 객체배열이 만들어짐
  const chageObjectArray = parseInputToArray.map((arr) => {
    // 🔥 ChatGPT Hint : replace를 통해서 필요없는 것을 없애고 있음.
    const [name, quantity] = arr.replace(/\[|\]/g, "").split("-"); // 이건 진짜 미친 힌트입니다.
                                      // 🔥 아 진짜 정규표현식 너무 어렵습니다. | 이게 도대체 뭔가요...
                                      // = |를 사용해 [ 또는 ] 둘 중 하나가 나타나는 모든 경우에 일치하도록 만듬
                                          // 즉 or이 없으면, [] 대괄호 전체에 해당하는 것을 찾으려고 합니다. 그래서 or은 중요합니다.
    return { name: name, quantity: Number(quantity)};
  })
  return chageObjectArray;
};

// const input = '[콜라-3], [오렌지주스-5], [감자칩-3], [초코바-5]';
// console.log(convertObjArr(input));