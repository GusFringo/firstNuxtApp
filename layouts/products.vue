<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Mi app merch</NuxtLink>
      </nav>
    </header>
  </div>
  <div class="container mx-auto p-4">
    <slot />
  </div>
  <footer class="container mx-auto p-4 flex jusitfy-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>
<style>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
