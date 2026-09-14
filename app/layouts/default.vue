<template>
  <div class="min-h-screen text-white  font-sans selection:bg-cyan-500/30">
    
    <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
      
      <Navbar class="lg:col-span-12" />
      <div class="lg:col-span-12">
        <slot />
      </div>

    </div>
  </div>
</template>