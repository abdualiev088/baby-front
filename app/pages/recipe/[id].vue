<script setup lang="ts">
import mealImg from '~/assets/images/meal.jpg'

definePageMeta({ layout: false })

const route = useRoute()
const router = useRouter()
const id = parseInt(route.params.id as string)
const recipe = useRecipe(id)

if (!recipe) {
  throw createError({ statusCode: 404, statusMessage: 'Recipe not found' })
}

const categoryColors: Record<string, string> = {
  BREAKFAST: 'bg-[#FEF3C7] text-[#D97706]',
  LUNCH:     'bg-[#FDE8E2] text-[#e07a5f]',
  DINNER:    'bg-[#EDE9FE] text-[#7C3AED]',
  SNACK:     'bg-[#DCFCE7] text-[#16A34A]',
}
const catClass = categoryColors[recipe.category] ?? 'bg-gray-100 text-gray-600'

const completedSteps = ref<Set<number>>(new Set([0]))

function toggleStep(index: number) {
  const next = new Set(completedSteps.value)
  if (next.has(index)) {
    next.delete(index)
  } else {
    next.add(index)
  }
  completedSteps.value = next
}

const favoritesStore = useFavoritesStore()
const { copied, shareRecipe } = useShare()
</script>

<template>
  <div class="grid grid-cols-10 gap-4 min-h-screen" style="background: #FFFAF3">
    <div class="col-span-2 bg-[#FFDECD] flex flex-col items-center pt-6">
      video
    </div>
    <div class="w-[750px] col-span-6 mx-auto">

      <!-- ── Hero ─────────────────────────────────────────── -->
      <div class="relative h-[280px] rounded-b-3xl overflow-hidden" style="background: linear-gradient(135deg, #F5C4A4 0%, #EBA882 100%);">

        <!-- Decorative circles -->
        <div class="absolute -top-12 -right-12 w-52 h-52 rounded-full opacity-20" style="background:#fff"></div>
        <div class="absolute bottom-0 -left-8 w-36 h-36 rounded-full opacity-10" style="background:#fff"></div>

        <!-- Top bar -->
        <div class="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <button
            @click="router.back()"
            class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <svg class="w-4 h-4 text-[#2A2230]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div class="flex items-center gap-2">
            <button
              @click="shareRecipe"
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <svg class="w-4 h-4 text-[#2A2230]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            <button
              @click="favoritesStore.toggleFavorite(recipe.id)"
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <svg
                class="w-4 h-4 transition-colors duration-200"
                :class="favoritesStore.isFavorite(recipe.id) ? 'text-[#e07a5f]' : 'text-[#2A2230]'"
                viewBox="0 0 24 24"
                :fill="favoritesStore.isFavorite(recipe.id) ? 'currentColor' : 'none'"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Meal image -->
        <div class="absolute inset-0 flex items-center justify-center pt-6">
          <img
            :src="mealImg"
            alt="Recipe"
            class=" w-auto object-contain drop-shadow-xl"
          />
        </div>

        <!-- Bottom badges -->
        <div class="absolute bottom-4 left-5 flex items-center gap-2 z-10">
          <div v-if="recipe.lowAllergyRisk" class="flex items-center gap-1.5 bg-white/90 text-[#3aaa7a] text-xs font-medium px-3 py-1.5 rounded-full">
            <svg class="w-3 h-3 stroke-[3]" viewBox="0 0 12 12" fill="none" stroke="currentColor">
              <polyline points="2,6 5,9 10,3"/>
            </svg>
            Low allergy risk
          </div>
          <div class="flex items-center gap-1.5 bg-white/90 text-[#2A2230] text-xs font-medium px-3 py-1.5 rounded-full">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {{ recipe.cookTime }}
          </div>
        </div>

        <!-- Dot pagination -->
        <div class="absolute bottom-4 right-5 flex items-center gap-1.5">
          <div class="w-5 h-1.5 bg-white rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
        </div>
      </div>

      <!-- ── Content area (cream bg, rounded top) ─────────────── -->
      <div class="bg-[#FFFAF3] relative z-10 px-5 pt-7 pb-14 space-y-5">

        <!-- Title + category -->
        <div class="px-1">
          <div class="flex items-start justify-between gap-3 mb-1">
            <h1 class="text-2xl font-bold text-[#2A2230] leading-tight">{{ recipe.title }}</h1>
            <span :class="['shrink-0 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full mt-1', catClass]">
              {{ recipe.category }}
            </span>
          </div>
          <p class="text-sm text-gray-400">{{ recipe.description }}</p>
        </div>

        <!-- Stats card -->
        <div class="bg-white rounded-2xl shadow-sm flex items-center divide-x divide-gray-100">
          <div class="flex-1 flex flex-col items-center gap-1 py-4 px-2">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background:#FDE8E2">
              <svg class="w-4 h-4 text-[#e07a5f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
              </svg>
            </div>
            <span class="text-base font-bold text-[#2A2230]">
              {{ recipe.portion }}<span class="text-xs font-normal">{{ recipe.portionUnit }}</span>
            </span>
            <span class="text-[10px] text-gray-400">Portion</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-1 py-4 px-2">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background:#FEF3C7">
              <svg class="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span class="text-base font-bold text-[#2A2230]">
              {{ recipe.energy }}<span class="text-xs font-normal">{{ recipe.energyUnit }}</span>
            </span>
            <span class="text-[10px] text-gray-400">Energy</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-1 py-4 px-2">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background:#D1FAE5">
              <svg class="w-4 h-4 text-[#3aaa7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span class="text-base font-bold text-[#2A2230]">
              {{ recipe.ageRange }}<span class="text-xs font-normal"> MO</span>
            </span>
            <span class="text-[10px] text-gray-400">Age</span>
          </div>
        </div>

        <!-- Ingredients -->
        <div>
          <div class="flex items-center justify-between mb-3 px-1">
            <h2 class="text-lg font-bold text-[#2A2230]">Ingredients</h2>
            <span class="text-sm font-medium text-[#e07a5f]">{{ recipe.items.length }} items</span>
          </div>
          <div class="flex gap-3 overflow-x-auto pb-1">
            <div
              v-for="item in recipe.items"
              :key="item.name"
              class="bg-white rounded-2xl shadow-sm flex flex-col items-center gap-1.5 shrink-0 px-4 py-3"
            >
              <div
                class="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                :style="{ background: item.bg }"
              >
                {{ item.emoji }}
              </div>
              <span class="text-xs font-bold text-[#2A2230]">
                {{ item.amount }}<span class="text-[10px] font-normal">{{ item.unit }}</span>
              </span>
              <span class="text-[10px] text-gray-400">{{ item.name }}</span>
            </div>
          </div>
        </div>

        <!-- Preparation -->
        <div>
          <h2 class="text-lg font-bold text-[#2A2230] mb-3 px-1">Preparation</h2>

          <!-- Video banner -->
          <div class="flex items-center gap-4 bg-[#2A2230] rounded-2xl px-5 py-4 mb-3">
            <div class="w-10 h-10 rounded-full bg-[#e07a5f] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-white text-sm font-semibold">Watch the recipe video</p>
              <p class="text-white/50 text-xs mt-0.5">2 min · with chef Mira</p>
            </div>
            <svg class="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>

          <!-- Steps — each as its own white card -->
          <div class="flex flex-col gap-2">
            <div
              v-for="(step, i) in recipe.steps"
              :key="i"
              @click="toggleStep(i)"
              class="bg-white rounded-2xl shadow-sm flex items-center gap-4 px-5 py-4 cursor-pointer select-none group transition-shadow hover:shadow-md"
            >
              <!-- Completed → green check -->
              <div
                v-if="completedSteps.has(i)"
                class="w-8 h-8 rounded-full bg-[#3aaa7a] flex items-center justify-center shrink-0 transition-all duration-200"
              >
                <svg class="w-4 h-4 text-white stroke-3" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <polyline points="2,6 5,9 10,3"/>
                </svg>
              </div>
              <!-- Pending → numbered salmon circle -->
              <div
                v-else
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold text-[#2A2230] transition-all duration-200 group-hover:bg-[#f5c8bc]"
                style="background:#FDE8E2"
              >
                {{ i + 1 }}
              </div>
              <p
                class="text-sm leading-relaxed transition-colors duration-200"
                :class="completedSteps.has(i) ? 'text-gray-400 line-through' : 'text-[#2A2230]'"
              >
                {{ step }}
              </p>
            </div>
          </div>
        </div>

        <!-- Why it's good -->
        <div>
          <h2 class="text-lg font-bold text-[#2A2230] mb-3 px-1">Why it's good</h2>
          <div class="flex flex-col gap-2">
            <div
              v-for="(benefit, i) in recipe.benefits"
              :key="i"
              class="bg-white rounded-2xl shadow-sm flex items-center gap-4 px-5 py-4"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                :style="{ background: benefit.iconBg }"
              >
                {{ benefit.icon }}
              </div>
              <p class="flex-1 text-sm text-[#2A2230]">
                <span class="font-semibold">{{ benefit.label }}</span>
                <span class="text-gray-400"> → {{ benefit.desc }}</span>
              </p>
              <svg class="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="col-span-2 bg-[#FFDECD] flex flex-col items-center pt-6">
      video
    </div>

    <!-- Toast: link copied -->
    <Transition name="fade">
      <div
        v-if="copied"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#2A2230] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg pointer-events-none whitespace-nowrap"
      >
        Link copied
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
