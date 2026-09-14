export function useShare() {
  const copied = ref(false)

  async function shareRecipe() {
    const url = window.location.href

    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // Fallback for mobile/restricted environments
      const el = document.createElement('textarea')
      el.value = url
      el.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }

    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }

  return { copied, shareRecipe }
}
