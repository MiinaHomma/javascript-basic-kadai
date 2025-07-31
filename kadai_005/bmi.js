// 体重(kg)と身長(m)
const weight = 68;
const height = 1.7;

// BMIの計算式：体重 ÷ (身長 × 身長)
const bmi = weight / (height * height);

// 結果の出力
console.log("BMIは " + bmi.toFixed(2) + " です。");
