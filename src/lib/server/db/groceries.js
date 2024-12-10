

export const groceryStock = [
    {name: 'Milk', unit: 'l', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Bread', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Bakery'},
    {name: 'Sugar', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Spices'},
    {name: 'Apples', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Fruits'},
    {name: 'Beef', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Meat'},
    {name: 'Chicken', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Meat'},
    {name: 'Oranges', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Fruits'},
    {name: 'Coffee', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Grains&Nuts'},
    {name: 'Icecream', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Frozen Pizza', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Frozen'},
    {name: 'Potatos', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
    {name: 'Tomatos', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
    {name: 'Eggs', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Chips', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Oil', unit: 'l', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
    {name: 'Butter', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Mushrooms', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
    {name: 'Pineapple Juice', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Drinks'},
    {name: 'Salt', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Spices'},
    {name: 'Hamon', unit: 'item', price: 0, stock: 0, dailyDeal: 0, category: 'Meat'},
    {name: 'Pork', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Meat'},
    {name: 'Dill', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
    {name: 'Cheese', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Dairy'},
    {name: 'Water', unit: 'l', price: 0, stock: 0, dailyDeal: 0, category: 'Drinks'},
    {name: 'Salmon', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Fish'},
    {name: 'Cucamber', unit: 'kg', price: 0, stock: 0, dailyDeal: 0, category: 'Vegetables'},
];

// randomly make grocery stock items as daily deals or not with random bool value. 
// randomly generate grocery item price and stock values.
groceryStock.forEach((item) => {
    item.dailyDeal = Math.round(Math.random());
    item.price = Number((Math.random()*7).toFixed(2));
    item.stock = Math.floor((Math.random()*250));
});

