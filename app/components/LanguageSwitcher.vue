<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const languages = [
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'UZ', label: 'Uzbek',   flag: '🇺🇿' },
  { code: 'RU', label: 'Russian', flag: '🇷🇺' },
]

const selected = ref(languages[0])
const open = ref(false)
const containerRef = ref(null)

function select(lang) {
  selected.value = lang
  open.value = false
}

function handleOutsideClick(e) {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<template>
  <div ref="containerRef" class="relative">
    <button
      @click="open = !open"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 bg-white text-[#2A2230] hover:border-[#2A2230] transition-all duration-200 select-none cursor-pointer"
    >
      <span class="text-base leading-none">{{ selected.flag }}</span>
      <span class="text-xs font-semibold tracking-wide">{{ selected.code }}</span>
      <svg
        :class="['w-3 h-3 transition-transform duration-200', open ? 'rotate-180' : '']"
        fill="none" stroke="currentColor" stroke-width="2.5"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition-all duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <ul
        v-if="open"
        class="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-50 py-1"
      >
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="select(lang)"
          :class="[
            'flex items-center gap-2.5 px-4 py-2 text-sm cursor-pointer transition-colors duration-150',
            selected.code === lang.code
              ? 'bg-[#2A2230] text-white'
              : 'text-[#2A2230] hover:bg-gray-50'
          ]"
        >
          <span class="text-base">{{ lang.flag }}</span>
          <span class="font-medium">{{ lang.label }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>
