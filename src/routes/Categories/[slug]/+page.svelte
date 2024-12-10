<script>
    let { data } = $props();
    import { myCart } from '../../cart.svelte.js';
</script>

<svelte:head>
    <title>{data.category.name}</title>
</svelte:head>

<div class="w-full py-2">
    <p class="w-2/3 m-auto">{data.category.description}</p>
</div>
<div class="grid grid-cols-5 w-2/3 m-auto">
    <div class="border-b-2 p-2 font-semibold">Category</div>
    <div class="border-b-2 p-2 font-semibold">Item name</div>
    <div class="border-b-2 p-2 font-semibold">Price</div>
    <div class="border-b-2 p-2 font-semibold">Daily deal</div>
    <div class="border-b-2 p-2 font-semibold">Add to cart</div>
    {#each data.categoryItems as item}
    <div class="my-2">{item.category}</div>
    <div class="my-2">{item.name}</div>    
    <div class="my-2">{item.price}$/{item.unit}</div>
    <div class="my-2">{#if item.dailyDeal === 1}<span class="material-icons-outlined">
        check_circle
        </span>
        {:else}
        <span class="material-icons-outlined">
            highlight_off
            </span>
        {/if}
    </div>
    <div class="my-2">
        <button onclick={() => myCart.addItem = item} class="w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500">
            Add
        </button>
    </div>
    {/each}
</div>
