<!-- This article of home page main segment is horizontally scrollable list of items
 in groceryStock that have daily deal property marked as true. It displays name, price and 
 unit(litre, kg) of item. and has option to add items to cart. -->

<script>
    let { dailyDeals, myCart } = $props();
</script>

<div class="p-4 block box-border border-b-2 -z-10">
    <div class="m-auto w-fit mb-4">
        <h2 class="text-xl bg-lime-600 px-4">Great Daily Deals for your grocery list!!!</h2>
    </div>
    <div class="w-full overflow-x-scroll py-2">
        <ul class="flex">
            {#each dailyDeals as item}
            <li class="mx-3" name={item.name}>
                <div class="bg-slate-200 h-60 w-44 p-3 rounded-md shadow-md shadow-slate-700">
                    <div class="bg-red-200 w-full h-4/6"></div>
                        <div class="grid grid-cols-3 bg-gray-50">
                            <div class="col-span-2 text-left my-auto pl-2">
                                <p class="">{item.name}</p>
                            </div>
                            <div class="my-auto text-right pr-2">
                                <p>{item.price}</p>
                                <p class="text-xs">EUR/{item.unit}</p>
                            </div>
                            <button class="col-span-3 hover:bg-lime-200" onclick={() => myCart.addItem = item}>
                                <span class="material-icons-outlined">
                                    shopping_cart
                                </span>
                            </button>
                        </div>
                </div>
            </li>
            {/each}
        </ul>
    </div>
</div>