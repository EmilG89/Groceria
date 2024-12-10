<!-- This is pop up list that opens when 'your cart $0.00 is clicked located at header'.
 It showes items added to cart, their amount and total price. Allows to increase and decrease 
 amount of items in cart and remove them without decreasing amount.-->

<script>

    let { myCart, toggle } = $props();

</script>

<div class="hidden w-96 bg-slate-50 px-4 py-4 shadow-md shadow-slate-700 absolute rounded-md" id="cartList">
    <div class="grid grid-cols-6">
        <div class="col-span-full sticky top-0 bg-slate-50 mb-4">
            <p class="w-full p-0"><strong>Groceries added</strong><button class="float-right border-2 px-2 rounded-md hover:bg-slate-200" href="" onclick={() => toggle('cartList')}>x</button></p>
        </div>
        <div class="col-span-3 text-left sticky top-14 bg-slate-50 border-b-2">Item</div>
        <div class="text-center sticky top-14 bg-slate-50 border-b-2">Amount</div>
        <div class="col-span-2 text-right sticky top-14 bg-slate-50 border-b-2">Price</div>
    </div>
    <div class="grid grid-cols-7 max-h-72 overflow-scroll gap-y-2">
        {#each myCart.itemsInCart as cartItem}
        <div class="col-span-3 text-left"><button class="px-2 hover:text-red-600 hover:font-bold" onclick={myCart.removeItem = cartItem[0]}>x</button>{cartItem[0].name}</div>
        <div class="col-span-2 text-center"><div class="grid grid-cols-3"><button onclick={myCart.decreaseCount = cartItem} class="hover:font-bold hover:text-red-600 text-right">-</button><p>{cartItem[1]}</p> <button onclick={myCart.addItem = cartItem[0]} class="hover:font-bold hover:text-lime-600 text-left">+</button></div></div>
        <div class="col-span-2 text-right">{(cartItem[0].price*cartItem[1]).toFixed(2)}$/{cartItem[0].unit}</div>
        {/each}
    </div>
    <div class="grid grid-cols-3 font-semibold">
        <div class="col-span-2 text-right bg-slate-50 border-t-2">Total:</div>
        <div class="text-right bg-slate-50 border-t-2">{myCart.total}$</div>
    </div>
</div>