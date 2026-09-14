<template>
  <div class="flex flex-col gap-3 h-full">
    <div class="flex items-center justify-between px-1">
      <p class="text-sm font-semibold text-[#2A2230]">Catch the ingredients! 🍎</p>
      <span v-if="started" class="text-sm font-bold text-[#2A2230]">Score: {{ score }}</span>
    </div>

    <div
      ref="gameRef"
      class="relative w-full rounded-2xl overflow-hidden select-none flex-1"
      style="min-height: 460px; background: linear-gradient(180deg, #FFF9F0 0%, #FFE8C8 100%); cursor: none;"
      @mousemove="onMouseMove"
      @touchmove.prevent="onTouchMove"
    >
      <!-- Falling ingredients -->
      <div
        v-for="item in ingredients"
        :key="item.id"
        class="absolute pointer-events-none leading-none"
        :style="{ left: item.x + 'px', top: item.y + 'px', fontSize: '26px' }"
      >
        {{ item.emoji }}
      </div>

      <!-- Basket -->
      <div
        v-if="started"
        class="absolute pointer-events-none leading-none transition-none"
        :style="{ left: clampedBasketX - 32 + 'px', bottom: '12px', fontSize: '48px', lineHeight: 1 }"
      >
        🧺
      </div>

      <!-- Start / Game Over overlay -->
      <div v-if="!started" class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/40 backdrop-blur-[2px] rounded-2xl">
        <p class="text-3xl">🧺</p>
        <p class="text-xl font-bold text-[#2A2230]">{{ gameOver ? 'Time\'s up!' : 'Catch the ingredients!' }}</p>
        <p v-if="gameOver" class="text-4xl font-bold text-[#2A2230]">{{ score }} caught!</p>
        <p v-else class="text-gray-500 text-sm text-center px-8">Move your mouse (or finger) to catch<br>falling ingredients with the basket</p>
        <button
          @click="startGame"
          class="px-7 py-2.5 bg-[#2A2230] text-white rounded-full font-semibold hover:opacity-80 active:scale-95 transition cursor-pointer"
        >
          {{ gameOver ? 'Play Again' : 'Start Game' }}
        </button>
      </div>

      <!-- Timer bar -->
      <div v-if="started" class="absolute top-2 left-3 right-3 h-2 rounded-full bg-black/10">
        <div
          class="h-2 rounded-full bg-[#2A2230] transition-none"
          :style="{ width: (timeLeft / GAME_DURATION * 100) + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const EMOJIS = ['🥕', '🍎', '🥦', '🍇', '🥑', '🍠', '🍊', '🫐', '🥝', '🍓', '🌽', '🧅']
const BASKET_HALF = 38
const ITEM_SIZE = 26
const BASE_SPEED = 1.6
const SPAWN_INTERVAL = 850
const GAME_DURATION = 30 // seconds

const gameRef = ref(null)
const ingredients = ref([])
const basketX = ref(200)
const score = ref(0)
const started = ref(false)
const gameOver = ref(false)
const timeLeft = ref(GAME_DURATION)

let nextId = 0
let animFrame = null
let lastSpawn = 0
let startTime = 0

const clampedBasketX = computed(() => {
  const w = gameRef.value?.clientWidth ?? 400
  return Math.max(BASKET_HALF, Math.min(w - BASKET_HALF, basketX.value))
})

function onMouseMove(e) {
  const rect = gameRef.value?.getBoundingClientRect()
  if (rect) basketX.value = e.clientX - rect.left
}

function onTouchMove(e) {
  const rect = gameRef.value?.getBoundingClientRect()
  if (rect && e.touches[0]) basketX.value = e.touches[0].clientX - rect.left
}

function spawnIngredient(now) {
  const w = (gameRef.value?.clientWidth ?? 400) - ITEM_SIZE - 10
  const elapsed = (now - startTime) / 1000
  const speed = BASE_SPEED + elapsed * 0.04 + Math.random() * 1.0
  ingredients.value.push({
    id: nextId++,
    x: Math.random() * Math.max(w, 10) + 5,
    y: -ITEM_SIZE,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    speed
  })
}

function gameLoop(ts) {
  if (!started.value) return

  const elapsed = (ts - startTime) / 1000
  timeLeft.value = Math.max(0, GAME_DURATION - elapsed)

  if (timeLeft.value <= 0) {
    started.value = false
    gameOver.value = true
    ingredients.value = []
    return
  }

  if (ts - lastSpawn > SPAWN_INTERVAL) {
    spawnIngredient(ts)
    lastSpawn = ts
  }

  const h = gameRef.value?.clientHeight ?? 460
  const catchY = h - 68
  const bx = clampedBasketX.value

  ingredients.value = ingredients.value.filter(item => {
    item.y += item.speed

    const itemCenter = item.x + ITEM_SIZE / 2
    if (item.y + ITEM_SIZE >= catchY && item.y < catchY + 28) {
      if (Math.abs(itemCenter - bx) < BASKET_HALF + 6) {
        score.value++
        return false
      }
    }

    return item.y <= h
  })

  animFrame = requestAnimationFrame(gameLoop)
}

function startGame() {
  score.value = 0
  ingredients.value = []
  gameOver.value = false
  started.value = true
  timeLeft.value = GAME_DURATION
  lastSpawn = 0
  if (gameRef.value) {
    basketX.value = gameRef.value.clientWidth / 2
  }
  animFrame = requestAnimationFrame(ts => {
    startTime = ts
    lastSpawn = ts
    gameLoop(ts)
  })
}

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>
