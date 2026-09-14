export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref<number[]>([])

  if (import.meta.client) {
    try {
      const stored = localStorage.getItem('baby-recipe-favorites')
      if (stored) favoriteIds.value = JSON.parse(stored)
    } catch { /* ignore corrupted data */ }
  }

  function persist() {
    if (import.meta.client) {
      localStorage.setItem('baby-recipe-favorites', JSON.stringify(favoriteIds.value))
    }
  }

  function isFavorite(id: number): boolean {
    return favoriteIds.value.includes(id)
  }

  function toggleFavorite(id: number): void {
    const idx = favoriteIds.value.indexOf(id)
    if (idx >= 0) {
      favoriteIds.value.splice(idx, 1)
    } else {
      favoriteIds.value.push(id)
    }
    persist()
  }

  const favoritesCount = computed(() => favoriteIds.value.length)

  return { favoriteIds, isFavorite, toggleFavorite, favoritesCount }
})
