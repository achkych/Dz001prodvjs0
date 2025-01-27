/*
Задание 2

Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

'use strict';

const chefSpecialties = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

const orders = new Map();

const order1 = new Map([
    [{ dish: "Пицца 'Пепперони'", chef: chefSpecialties.get("Пицца 'Пепперони'") }],
    [{ dish: "Тирамису", chef: chefSpecialties.get("Тирамису") }]
]);
orders.set({ name: "Алексей" }, order1);

const order2 = new Map([
    [{ dish: "Суши 'Калифорния'", chef: chefSpecialties.get("Суши 'Калифорния'") }],
    [{ dish: "Пицца 'Маргарита'", chef: chefSpecialties.get("Пицца 'Маргарита'") }]
]);
orders.set({ name: "Мария" }, order2);

const order3 = new Map([
    [{ dish: "Чизкейк", chef: chefSpecialties.get("Чизкейк") }]
]);
orders.set({ name: "Ирина" }, order3);

console.log("Повара и заказы:");
for (const [client, order] of orders) {
    console.log(`${client.name} заказал:`);
    for (const dish of order) {
        console.log(`- ${dish[0].dish} у повара: ${dish[0].chef}`);
    }
}
