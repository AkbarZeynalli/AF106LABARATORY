const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//! Sual3: Ölkələr massivindəki hər bir ölkəyə console.log daxil etmək üçün forEach-dan istifadə edin.
// countries.forEach(item => {
//     console.log(item);
// });

// !Sual4:Adlar massivindəki hər adı console.log üçün forEach istifadə edin.
// names.forEach(item => {
//     console.log(item);
// });

//! Sual5:Rəqəmlər massivindəki hər nömrəni console.log üçün forEach istifadə edin.
// numbers.forEach(item => {
//     console.log(item);
// });

//! Sual6:Ölkələr massivində hər bir ölkəni böyük hərflə dəyişdirərək yeni massiv yaratmaq üçün xəritədən istifadə edin.
// let uperCase = countries.map(country =>country.toUpperCase())
// console.log(uperCase);

//! Sual7:Ölkələr massivindən ölkələr uzunluğu massivi yaratmaq üçün xəritədən istifadə edin.
// let lengthCountry = countries.map(country =>country.length)
// console.log(lengthCountry);

//! Sual8:Rəqəmlər massivində hər bir rəqəmi kvadrata dəyişdirərək yeni massiv yaratmaq üçün xəritədən istifadə edin
// let square  = numbers.map(sqr => sqr**2)
// console.log(square);

//! Sual9:Adlar massivində hər adı böyük hərflə dəyişmək üçün xəritədən istifadə edin
// let uperCaseName= names.map(item =>item.toUpperCase())
// console.log(uperCaseName);

//! Sual10:Məhsullar massivinin müvafiq qiymətləri ilə xəritələşdirilməsi üçün xəritədən istifadə edin.
// let prdct = products.map(item => item.product)
// let prc = products.map(item => item.price)
// console.log(`Məhsullar:${prdct} və qiymətləri:${prc}`);
