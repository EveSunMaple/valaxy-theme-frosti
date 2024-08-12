<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface TagCount {
  tag: string
  count: number
}

async function getTagsWithCounts(): Promise<TagCount[]> {
  const posts = [
    { data: { tags: ['vue', 'javascript'] } },
    { data: { tags: ['vue', 'css'] } },
    { data: { tags: ['unocss', 'javascript'] } },
  ]

  const tagMap = new Map<string, number>()

  posts.forEach((post) => {
    const tags = post.data.tags || []
    tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })

  return Array.from(tagMap, ([tag, count]) => ({ tag, count }))
}

const tagsWithCounts = ref<TagCount[]>([])

onMounted(async () => {
  tagsWithCounts.value = await getTagsWithCounts()
})

const infoTest = {
  tagCard: '标签列表',
}
</script>

<template>
  <div class="bg-base-100 no-card mb-8 w-full shadow-xl">
    <div class="p-4">
      <div class="btn btn-sm btn-ghost no-animation w-full font-bold">
        {{ infoTest.tagCard }}
      </div>
    </div>
    <div class="max-h-[300px] w-full flex flex-wrap gap-2.5 overflow-auto p-4">
      <span v-for="({ tag, count }) in tagsWithCounts" :key="tag" class="inline">
        <a :href="`/blog/tag/${tag}`" class="btn btn-sm">
          {{ tag }}
          <div class="badge badge-secondary">{{ count }}</div>
        </a>
      </span>
    </div>
  </div>
</template>
