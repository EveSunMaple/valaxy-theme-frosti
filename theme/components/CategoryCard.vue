<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()

const tagsWithCounts = ref([])

async function getTagsWithCounts() {
  const posts = await getCollection('blog')
  const tagMap = new Map()

  posts.forEach((post) => {
    const tags = post.data.categories || []
    tags.forEach((category) => {
      tagMap.set(category, (tagMap.get(category) || 0) + 1)
    })
  })

  tagsWithCounts.value = Array.from(tagMap, ([category, count]) => ({ category, count }))
}

onMounted(() => {
  getTagsWithCounts()
})
</script>

<template>
  <div class="bg-base-100 no-card mb-8 w-full shadow-xl">
    <div class="p-4">
      <div class="btn btn-sm btn-ghost no-animation w-full font-bold">
        {{ themeConfig.infoTest.categoryCard }}
      </div>
    </div>
    <div class="max-h-[300px] w-full flex flex-wrap gap-2.5 overflow-auto p-4">
      <span v-for="({ category, count }, index) in tagsWithCounts" :key="index" class="inline">
        <a :href="`/blog/categories/${category}`" class="btn btn-sm">
          {{ category }}
          <div class="badge badge-accent">{{ count }}</div>
        </a>
      </span>
    </div>
  </div>
</template>
