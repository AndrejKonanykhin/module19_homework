// Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет,
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

// используем тот же объект
const car = {
  manufacturer: "skoda",
  model: "octavia",
  year: 2020,
  color: "red",
  drive: function () {
    console.log("You can drive me really fast");
  },
};

// пишем функцию
function isPropertyInObject(obj, str) {
  if (str in obj) {
    return true;
  }
  return false;
}

isPropertyInObject(car, "color"); // true

// стрелочная функция
const propertyInObject = (obj, str) => (str in obj ? true : false);

propertyInObject(car, "name"); // false
