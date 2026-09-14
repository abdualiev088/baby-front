<script setup lang="ts">
import defaultMeal from '../assets/images/meal.jpg'

const favoritesStore = useFavoritesStore()

defineProps({
  recipeId:       { type: Number,  required: true },
  title:          { type: String,  default: 'Rabbit & veggie soup' },
  category:       { type: String,  default: 'LUNCH' },
  image:          { type: String,  default: () => defaultMeal },
  portion:        { type: String,  default: '100' },
  portionUnit:    { type: String,  default: 'g' },
  energy:         { type: String,  default: '200' },
  energyUnit:     { type: String,  default: 'kcal' },
  ageRange:       { type: String,  default: '6–9' },
  ageUnit:        { type: String,  default: 'mo' },
  lowAllergyRisk: { type: Boolean, default: true },
})
</script>

<template>
  <NuxtLink :to="`/recipe/${recipeId}`" class="block group">
    <div class="w-full rounded-2xl overflow-hidden shadow-md bg-white group-hover:-translate-y-2 transition duration-300 ease-in-out">

      <!-- Image section -->
      <div class="relative h-42.5 bg-linear-to-br from-[#cce8e0] to-[#a8d4c8] flex items-center justify-center overflow-hidden">

        <!-- Low allergy risk badge -->
        <div v-if="lowAllergyRisk" class="absolute top-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-[#3aaa7a] text-xs font-medium px-3 py-1.5 rounded-full z-10">
          <svg class="w-3 h-3 stroke-3" viewBox="0 0 12 12" fill="none" stroke="currentColor">
            <polyline points="2,6 5,9 10,3" />
          </svg>
          Low allergy risk
        </div>

        <!-- Favourite button -->
        <button
          @click.prevent.stop="favoritesStore.toggleFavorite(recipeId)"
          class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform z-10 cursor-pointer"
        >
          <svg
            class="w-4 h-4 transition-colors duration-200"
            :class="favoritesStore.isFavorite(recipeId) ? 'text-[#e07a5f]' : 'text-gray-400'"
            viewBox="0 0 24 24"
            :fill="favoritesStore.isFavorite(recipeId) ? 'currentColor' : 'none'"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <!-- Meal image -->
        <img :src="image" alt="Meal" class="w-full object-cover drop-shadow-md" />
      </div>

      <!-- Content section -->
      <div class="p-4 space-y-3">

        <!-- Title + category -->
        <div class="flex items-center justify-between gap-2">
          <h4 class="text-[15px] font-bold text-[#2A2230] leading-tight">{{ title }}</h4>
          <span class="shrink-0 text-[10px] font-semibold tracking-wide text-[#e07a5f] bg-[#fde8e2] px-2.5 py-1 rounded-full">
            {{ category }}
          </span>
        </div>

        <!-- Stats -->
        <div class="flex items-center gap-2">
          <div class="flex-1 flex flex-col items-center bg-[#fdf3e7] rounded-xl py-2">
            <span class="text-sm font-bold text-[#2A2230]">{{ portion }}<span class="text-xs font-normal">{{ portionUnit }}</span></span>
            <span class="text-[10px] text-gray-400 mt-0.5">Portion</span>
          </div>
          <div class="flex-1 flex flex-col items-center bg-[#fdf3e7] rounded-xl py-2">
            <span class="text-sm font-bold text-[#2A2230]">{{ energy }}<span class="text-xs font-normal">{{ energyUnit }}</span></span>
            <span class="text-[10px] text-gray-400 mt-0.5">Energy</span>
          </div>
          <div class="flex-1 flex flex-col items-center bg-[#fdf3e7] rounded-xl py-2">
            <span class="text-sm font-bold text-[#2A2230]">{{ ageRange }}<span class="text-xs font-normal">{{ ageUnit }}</span></span>
            <span class="text-[10px] text-gray-400 mt-0.5">Age</span>
          </div>
        </div>

      </div>
    </div>
  </NuxtLink>
</template>
