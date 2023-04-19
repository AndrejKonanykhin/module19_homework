// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
// и значения только собственных свойств. Данная функция не должна возвращать значение.

// создаем объект-прототип
const car = {
  manufacturer: "skoda",
  model: "octavia",
};

// создаем объект по прототипу
const skoda = Object.create(car);

// добавим собственные свойства
skoda.year = 2020;
skoda.color = "red";
skoda.drive = function () {
  console.log("You can drive me really fast");
};

// пишем функцию
function getOwnProperty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}

// вызываем функцию
getOwnProperty(skoda);
