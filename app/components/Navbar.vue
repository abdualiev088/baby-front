<script setup>
const route = useRoute()

const navItems = [
  { to: '/',          label: 'Home' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/about',     label: 'About us' },
]

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <nav class="w-full flex items-center justify-between px-12 py-4">
    <div class="logo text-base shrink-0">
      Baby <span class="italic font-normal">nutrition</span>
    </div>

    <div class="flex items-center gap-6 w-full justify-center">

      <!-- Home -->
      <NuxtLink
        to="/"
        class="flex items-center gap-1.5 text-sm font-medium transition-colors"
        :class="isActive('/') ? 'text-[#2A2230]' : 'text-[#B8B1BF] hover:text-[#2A2230]'"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 12 15 12 15 21" />
        </svg>
        Home
      </NuxtLink>

      <!-- Favorites -->
      <NuxtLink
        to="/favorites"
        class="flex items-center gap-1.5 text-sm font-medium transition-colors"
        :class="isActive('/favorites') ? 'text-[#2A2230]' : 'text-[#B8B1BF] hover:text-[#2A2230]'"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        Favorites
      </NuxtLink>

      <!-- About us -->
      <NuxtLink
        to="/about"
        class="flex items-center gap-1.5 text-sm font-medium transition-colors"
        :class="isActive('/about') ? 'text-[#2A2230]' : 'text-[#B8B1BF] hover:text-[#2A2230]'"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="8" stroke-width="2.5" stroke-linecap="round" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
        About us
      </NuxtLink>

    </div>

    <div class="shrink-0">
      <LanguageSwitcher />
    </div>
  </nav>
</template>
