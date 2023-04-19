// Модификация консольного приложения с использованием классов

//родительский класс - электроприборы
class ElectricDevice {
  constructor(name) {
    this.name = name;
    this.voltage = 220;
  }

  deviceOnOff = function (isOn) {
    if (isOn) {
      console.log(`${this.name} включен`);
    } else {
      console.log(`${this.name} выключен`);
    }
  };
}

//создадим дочерний класс электроприборов - лампы
class Lamp extends ElectricDevice {
  constructor(name, power, location) {
    super(); //сохраняем voltage из родителя
    this.name = name;
    this.power = power;
    this.location = location;
  }

  // включение лампы
  deviceOnOff = function (isOn) {
    if (isOn) {
      console.log(`${this.name} ${this.location} включена и потребляет ${this.power} Вт`);
    } else {
      console.log(`${this.name} ${this.location} выключена`);
    }
  };

  // лампа светит
  turnLight = function (isOn) {
    if (isOn) {
      console.log(`${this.location} светло`);
    } else {
      console.log(`${this.location} темно`);
    }
  };
}

//создадим пару ламп
const lampKitchen = new Lamp("лампа", 20, "на кухне");
const lampLivingRoom = new Lamp("люстра", 20, "в гостиной");

// true, если нужно включить, false - выключить
lampKitchen.deviceOnOff(true);
lampLivingRoom.turnLight(false);

//проверка родителя
console.log(lampKitchen instanceof ElectricDevice); //true
console.log(lampKitchen instanceof Lamp); //true


//создадим дочерний класс электроприборов - телевизоры
class TV extends ElectricDevice {
  constructor(name, brand, power, location) {
    super(); //сохраняем voltage из родителя
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.location = location;
  }

  // включение телевизора
  deviceOnOff = function (isOn) {
    if (isOn) {
      console.log(`${this.name} ${this.location} включен и потребляет ${this.power} Вт`);
    } else {
      console.log(`${this.name} ${this.location} выключен`);
    }
  };

  // телевизор говорит и показывает
  turnTV = function (isOn) {
    if (isOn) {
      console.log(`Кто-то смотрит ${this.name} ${this.location}`);
    } else {
      console.log(`${this.name} ${this.location} выключен`);
    }
  };
}

//создадим пару телевизоров
const tvLivingRoom = new TV("телевизор", "Samsung", 80, "в гостиной");
const tvBedroom = new TV("телевизор", "LG", 80, "в спальне");

// true, если нужно включить, false - выключить
tvBedroom.deviceOnOff(true);
tvLivingRoom.turnTV(false);

console.log(tvBedroom instanceof ElectricDevice); //true
console.log(tvLivingRoom instanceof TV); //true
console.log(tvLivingRoom instanceof Lamp); //false
console.log(lampKitchen instanceof TV); //false