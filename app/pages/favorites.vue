<script setup>
import { computed } from 'vue'

const favoritesStore = useFavoritesStore()

const favoriteRecipes = computed(() =>
  recipes.filter(r => favoritesStore.isFavorite(r.id))
)
</script>

<template>
  <div class="items-center justify-between px-12">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col items-center gap-1">
        <p class="text-sm font-semibold text-[#2A2230]">Favorites</p>
      </div>

      <div class="grid grid-cols-4 rounded-lg gap-4">
        <Card
          v-for="item in favoriteRecipes"
          :key="item.id"
          :recipeId="item.id"
          :title="item.title"
          :category="item.category"
          :ageRange="item.ageRange"
          :portion="item.portion"
          :portionUnit="item.portionUnit"
          :energy="item.energy"
          :energyUnit="item.energyUnit"
          :lowAllergyRisk="item.lowAllergyRisk"
          ageUnit="mo"
        />
        <div
          v-if="favoriteRecipes.length === 0"
          class="col-span-4 text-center py-16 text-gray-400 text-sm"
        >
          No favorites yet. Tap the heart on any recipe to save it here.
        </div>
      </div>
    </div>
  </div>
</template>
