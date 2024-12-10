<script>

    let { myCart } = $props();
    import CartListSmall from './CartListSmall.svelte';
    import { toggle } from './toggle.js';

</script>

<nav class="mx-auto">
    <ul class="px-2 flex">

        <li class="mx-2 relative border-b-4 border-transparent hover:border-b-gray-200">
            <a class="" href="/">
                <span class="material-icons-outlined" style="font-size:48px;">
                    store
                </span>
            </a>
        </li>
      
        <li class="mx-2 relative border-b-4 border-transparent hover:border-b-gray-200">
            <a class="" href="/Profile">
                <span class="material-icons-outlined" style="font-size:48px;">
                    person
                    </span>
                <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">0</div>
            </a>
        </li>
      
        <li class="mx-2 relative border-b-4 border-transparent hover:border-b-gray-200">
            <a class="" href="/Cart">
                <span class="material-icons-outlined" style="font-size:48px;">
                    shopping_cart
                    </span>
                <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{myCart.itemsInCart.length}</div>
            </a>
        </li>
      
        <li class="mx-2 relative border-b-4 border-transparent hover:border-b-gray-200">
            <a class="" href="/Statistics">
                <span class="material-icons-outlined" style="font-size:48px;">
                    bar_chart
                    </span>
                <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">0</div>
            </a>
        </li>
      
        <li class="mx-2 relative border-b-4 border-transparent hover:border-b-gray-200">
            <button class="flex flex-col text-center" onclick={() => toggle('cartList')}>
                <span class="w-full text-xs text-gray-400">Your <br> Cart</span>
                <span class="w-20 font-semibold">${myCart.total}</span>
            </button>
            <div class="relative right-72 z-10"><CartListSmall {myCart}, {toggle}/></div>
        </li>

    </ul>
    
  </nav>