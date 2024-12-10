<!-- Header of all pages consists of 4 segment
    - logo
    - search bar and dropdown container with item categories
    - contacts
    - user menu to navigate to: 
        - home page, 
        - user profile, 
        - purchase cart
        - historical purchase hitor
        - purchase total value with purchase cart item mini list
--> 

<script>
  import Logo from './Logo.svelte';
  import SearchMenu from './SearchMenu.svelte';
  import Contacts from './Contacts.svelte';
  import UserMenu from './UserMenu.svelte';
  let { myCart, categories } = $props();

</script>

<header class="w-full bg-white px-8 border-b-2 shadow-md fixed">
  <div class="w-full p-4 md:flex xs:flex-col place-items-center justify-center">
    
    <!-- logo -->
    <div class="px-4">
      <Logo />      
    </div>

    <!-- search -->
    <div class="">
      <SearchMenu { categories }/>
    </div>
    
    <!-- phone number -->
    <div class="hidden lg:flex lg:flex-col place-items-end w-fit px-4">
      <Contacts />
    </div>

    <!-- buttons -->
    <div class="mt-4 mx-20 md:mx-2">
      <UserMenu { myCart }/>
    </div>

  </div>
</header>