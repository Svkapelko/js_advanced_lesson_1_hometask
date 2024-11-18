//ДЗ 1
const musicCollection = [
    { 
        title: "Название альбома",
        artist: "Исполнитель",
        year: "Год выпуска"
    } 
];

musicCollection[Symbol.iterator] = function() { //функция возвращает объект итератора, далее работает только с этим итератором, запрашивая у него новые значения
    return {
        current: 0,
        to: this.length,
        next(){ //вызывается на каждой итерации цикла for...(of), должен вернуть значение в виде объекта {done: ... , value: ... }
            return this.current < this.to
            ? {done: false, value: musicCollection[this.current++]}
            : {done: true};
        }
    }
}

for (let collection of musicCollection) {
    console.log("musicCollection item", `Название: ${collection.title}, автор: ${collection.artist}, год выпуска ${collection.year}`);
}


//ДЗ 2

const chefsDishes = new Map();
chefsDishes.set("Виктор", "Пицца");
chefsDishes.set("Ольга", "Суши"); 
chefsDishes.set("Дмитрий", "Десерты");

const dishes = new Map();
dishes.set("Пицца Маргарита", "Виктор");
dishes.set("Пицца Пепперони", "Виктор");
dishes.set("Суши Филадельфия", "Ольга");
dishes.set("Суши Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

const victorDishes = new Set();
victorDishes.add('Пицца Маргарита')
            .add(' Пицца Пепперони');

const olgaDishes = new Set();
olgaDishes.add('Суши Филадельфия')
            .add(' Суши Калифорния');
            
const dmitryDishes = new Set();
dmitryDishes.add('Тирамису')
            .add(' Чизкейк');
                
const chefs = new Map();
chefs.set("Виктор", victorDishes);
chefs.set("Ольга", olgaDishes);
chefs.set("Дмитрий", dmitryDishes);

console.log(`Блюда Виктора: ${[...chefs.get("Виктор")]}`);
console.log(`Блюда Ольги: ${[...chefs.get("Ольга")]}`);
console.log(`Блюда Дмитрия: ${[...chefs.get("Дмитрий")]}`);


const orders = new Map();
const order1 = 
    {
        clientName: "Алексей", 
        orders: ["Пицца Маргарита", "Тирамису"]
    };

const order2 =
    {
        clientName: "Мария", 
        orders: ["Суши Калифорния", "Пицца Маргарита"]
    };

const order3 =
    {
        clientName: "Ирина", 
        orders: ["Чизкейк"]
    }

orders.set(order1, 1);
orders.set(order2, 2);
orders.set(order3, 3);

orders.forEach((value, key) => {
    console.log(`${key.clientName} — ${key.orders}`)
});

