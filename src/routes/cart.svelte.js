//this file is dedicated to creating app visitors cart, where items for purchase will be added.

class Cart {
    #itemsInCart = $state([]);
    #total = $derived(this.#itemsInCart.reduce((total, n, next) => total + Number(n[0].price*n[1]), 0).toFixed(2));

    constructor(item) {
        console.log('cart constructed');
    }

    get itemsInCart() {
        return this.#itemsInCart;
    }
    get total() {
        return this.#total;
    }

    set addItem(item) {
        //items in cart are stored in arrays with 2 elements. index 0 is item itself, index 1 is number of times
        //this item was added to cart.

        //Check if particular item is already in cart, if is add to the number of items in cart, if is not add array
        //with item under index 0 and int 1 under index 1.
        let match = this.#itemsInCart.find(i => i[0].name == item.name);
        match ? match[1]++ : this.#itemsInCart.push([item, 1]);
    }
    set decreaseCount(item) {
        //decrese number of particular item in cart. if the item for decrease is last one, the whole array
        //with that item is removed from cart by calling removeItem function.
        item[1] === 1 ? this.removeItem = item[0] : this.#itemsInCart.find(i => i[0].name === item[0].name)[1]--;
    }
    set removeItem(item) {
        //find index of item in cart that has to be removed from itemsInCart array and is removed using splice.
        let index = this.#itemsInCart.findIndex(i => 
            i[0].name === item.name
        );
        this.#itemsInCart.splice(index, 1);
    }

}

//Cart is created under first page load.
export const myCart = new Cart;
