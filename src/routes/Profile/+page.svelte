<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<svelte:head>
    <title>My Profile</title>
</svelte:head> 

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Hi, {data.user.username}!</h2>
        <p class="my-5 text-center text-xl/9 font-bold tracking-tight text-gray-900">Your user ID: {data.user.id}.</p>
        <form method="post" action="?/logout" use:enhance>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign out</button>
        </form>
    </div>
</div>