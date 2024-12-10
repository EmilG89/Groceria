<script>
    import DailyDeals from './DailyDeals.svelte';
    import { myCart } from './cart.svelte.js';
    let { data } = $props();
</script>

<svelte:head>
    <title>Home</title>
</svelte:head> 

<!-- 1st article of home page main segment -->
<DailyDeals { myCart } dailyDeals={ data.dailyDeals } />