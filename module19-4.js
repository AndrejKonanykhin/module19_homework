// Создание консольного приложения

function ElectricDevice(name) {
  this.name = name;
  this.voltage = 220;
}

ElectricDevice.prototype.deviceOnOff = function (isOn) {
  if (isOn) {
    console.log(`${this.name} включен`);
  } else {
    console.log(`${this.name} выключен`);
  }
};

//конструктор для ламп
function Lamp(name, power, location) {
  this.name = name;
  this.power = power;
  this.location = location;
}

Lamp.prototype = new ElectricDevice();

// включение лампы
Lamp.prototype.deviceOnOff = function (isOn) {
  if (isOn) {
    console.log(`${this.name} ${this.location} включена и потребляет ${this.power} Вт`);
  } else {
    console.log(`${this.name} ${this.location} выключена`);
  }
};

// лампа светит
Lamp.prototype.turnLight = function (isOn) {
  if (isOn) {
    console.log(`${this.location} светло`);
  } else {
    console.log(`${this.location} темно`);
  }
};

//создадим пару ламп
const lampKitchen = new Lamp("лампа", 20, "на кухне");
const lampLivingRoom = new Lamp("люстра", 20, "в гостиной");

// true, если нужно включить, false - выключить
lampKitchen.deviceOnOff(true);
lampLivingRoom.turnLight(false);

//конструктор для ТВ
function TV(name, brand, power, location) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.location = location;
}

TV.prototype = new ElectricDevice();

//включение телевизора
TV.prototype.deviceOnOff = function (isOn) {
  if (isOn) {
    console.log(`${this.name} ${this.location} включен и потребляет ${this.power} Вт`);
  } else {
    console.log(`${this.name} ${this.location} выключен`);
  }
};

// телевизор говорит и показывает
TV.prototype.turnTV = function (isOn) {
  if (isOn) {
    console.log(`Кто-то смотрит ${this.name} ${this.location}`);
  } else {
    console.log(`${this.name} ${this.location} выключен`);
  }
};

//создадим пару телевизоров
const tvLivingRoom = new TV("телевизор", "Samsung", 80, "в гостиной");
const tvBedroom = new TV("телевизор", "LG", 80, "в спальне");

// true, если нужно включить, false - выключить
tvBedroom.deviceOnOff(true);
tvLivingRoom.turnTV(false);
