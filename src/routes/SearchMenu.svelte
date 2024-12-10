<script>

    let { categories } = $props();
    import { toggle } from './toggle.js';

</script>

<div class="grid md:grid-cols-2 xs:grid-cols-1 bg-gray-100 rounded-md">
    <div class="">
        <button id="categories" type="button" onclick={() => toggle('categoryMenu')} class="text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-md text-sm text-center w-full h-12">
            Category
        </button>
        <!-- Dropdown menu -->
        <div id="categoryMenu" class="absolute z-20 w-56 hidden bg-gray-700 divide-y divide-gray-100 rounded-md shadow-md shadow-black">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            {#each categories as { slug, name}}
                <li>
                    <a href="/Categories/{slug}" onclick="{() => toggle('categoryMenu')}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{name}</a>
                </li>
            {/each}
            </ul>
        </div>
    </div>
    <input class="rounded-md border-gray-300 bg-transparent text-base w-full h-12" type="text" placeholder="I'm searching for ..."/>
</div>