
let num = 266219;
let mul = 0;

while (num > 0) {
   mul *= num % 10;
   num = Math.floor(num / 10);
}

// вывод переменной num
console.log(mul);

// // возведение в степень
let result = mul ** 3;

console.log(String(mul).slice(0, 2));


