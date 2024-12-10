<script>
	import '../app.css';
	let { data, children } = $props();
	import Header from './Header.svelte';
	import { myCart } from './cart.svelte.js';
</script>


<!-- Header for all pages --> 
<Header { myCart } categories={data.categories} />

<!-- Main segment container for all pages -->
<div class="pt-80 md:pt-36">
	{@render children()}
</div>