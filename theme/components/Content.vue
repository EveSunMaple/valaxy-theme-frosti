<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')

  const generateTocContent = () => {
    let tocContent = '<ul class=\'overflow-auto w-full list-none m-0 p-0\'>'
    const levelCounters = [0, 0, 0, 0, 0, 0]
    headings.forEach((heading) => {
      const headingId = heading.id
      const headingText = heading.textContent
      const headingLevel = Number.parseInt(heading.tagName.charAt(1), 10)

      if (headingId && headingText && headingLevel) {
        const level = headingLevel - 1
        levelCounters[level]++
        levelCounters.fill(0, level + 1)
        let numbering = levelCounters.slice(1, level + 1).join('.')
        if (numbering == '')
          numbering = '⚝'
        tocContent += `<li class="list-none m-0 p-0"><a class="w-full text-base font-semibold p-2 level-${headingLevel}" href="#${headingId}"><span class="toc-number">${numbering}</span>${headingText}</a></li>`
      }
    })
    tocContent += '</ul>'
    return tocContent
  }

  const tocBox = document.getElementById('content-box')

  if (tocBox) {
    tocBox.innerHTML = generateTocContent()
  }
})
</script>

<template>
  <div class="sticky top-8 w-full flex-col gap-4">
    <div
      id="button-box"
      class="mb-b overflow-hide card bg-base-100 grid grid-cols-2 max-h-[600px] w-full justify-center gap-4 p-4 shadow-xl lg:grid-cols-2 md:grid-cols-1"
    >
      <ThemeIcon />
    </div>
    <div
      id="content-box"
      class="mb-b overflow-hide card bg-base-100 menu top-8 max-h-[65vh] w-full p-4 shadow-xl"
    >
      <div class="skeleton h-4 w-28" />
      <br>
      <div class="skeleton h-4 w-full" />
      <br>
      <div class="skeleton h-4 w-full" />
      <br>
      <div class="skeleton h-4 w-full" />
      <br>
    </div>
  </div>
</template>
