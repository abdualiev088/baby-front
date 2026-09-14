
<script setup>
import { ref, computed } from 'vue'

const periods = [
  { label: '0–3',      min: 0,  max: 3        },
  { label: '3–6',      min: 3,  max: 6        },
  { label: '6–9',      min: 6,  max: 9        },
  { label: '9–12',     min: 9,  max: 12       },
  { label: '1 year →', min: 12, max: Infinity },
]

const selectedPeriod = ref(periods[1])

const filtered = computed(() =>
  recipes.filter(r =>
    r.minAge >= selectedPeriod.value.min && r.minAge < selectedPeriod.value.max
  )
)
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Month filter -->
    <div class="flex flex-col items-center gap-3">
      <p class="text-sm font-semibold text-[#2A2230]">Months</p>
      <div class="flex items-center gap-2 flex-wrap justify-center">
        <button
          v-for="p in periods"
          :key="p.label"
          @click="selectedPeriod = p"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
            selectedPeriod.label === p.label
              ? 'bg-[#2A2230] text-white shadow-md'
              : p.label === '1 year →'
                ? 'bg-[#fde8d8] text-[#2A2230] hover:bg-[#fcd6be]'
                : 'bg-white border border-gray-200 text-[#2A2230] hover:border-[#2A2230]'
          ]"
        >
          {{ p.label }}
        </button>
      </div>
    </div>

    <!-- Ingredient grid -->
    <div class="grid grid-cols-4 rounded-lg gap-4">
      <Card
        v-for="item in filtered"
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
        v-if="filtered.length === 0"
        class="col-span-4 text-center py-16 text-gray-400 text-sm"
      >
        No ingredients found for this age range.
      </div>
    </div>
  </div>
</template>
