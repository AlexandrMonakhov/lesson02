let money = 250000,
  income = 'Фриланс',
  addExpenses = `Еда, Квартира, Тёплые носочки`,
  deposit = true,
  mission =
  2000000,
  period = 6;

// тип данных у переменной money
console.log(typeof money);

// тип данных у переменной income
console.log(typeof income);

// тип данных у переменной deposit
console.log(typeof deposit);

// длинна строки income
console.log(income.length);

// вывод в консоль
console.log(`Период ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);

// приведение строки к нижнему регистру и разбиение на массив
console.log('addExpenses: ', addExpenses.toLowerCase().split(', '));

// дневной бюджет
let budgetDay = 135000 / 30;
console.log('Дневной бюджет: ', budgetDay);