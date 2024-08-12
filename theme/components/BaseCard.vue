<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

const props = defineProps({
  title: { type: String, default: 'undefined' },
  image: String,
  pubDate: String,
  badge: String,
  categories: Array,
  tags: Array,
  isBlog: { type: Boolean, default: false },
})

const route = useRoute()
const themeConfig = useThemeConfig()

const url = decodeURIComponent(route.fullPath)
const displayDate = computed(() => dayjs(props.pubDate).format(themeConfig.value.dateFormat))
const hasCategories = computed(() => props.categories && props.categories.length > 0)
const hasTags = computed(() => props.tags && props.tags.length > 0)
</script>

<template>
  <div
    class="card bg-base-100 relative left-1/2 mb-8 transform overflow-hidden shadow-xl -translate-x-1/2"
    :title="title"
  >
    <img
      v-if="image"
      :src="image"
      width="1920"
      height="1080"
      alt="title"
      class="card-img"
      loading="eager"
    >
    <div class="main-card card bg-base-100 relative z-10 p-6 leading-6 lg:p-8 md:p-6">
      <template v-if="isBlog">
        <h1 id="h1">
          {{ title }}
        </h1>
        <div class="info mt-2">
          <div v-if="displayDate" class="badge badge-neutral">
            {{ displayDate }}
          </div>
          <span>&thinsp;</span>
          <div v-if="badge" class="badge badge-primary">
            {{ badge }}
          </div>
          <div class="tags mt-2">
            <template v-if="hasCategories">
              <a
                v-for="(category, index) in categories"
                :key="index"
                :href="`/blog/categories/${category}`"
                class="btn btn-xs btn-accent"
              >
                {{ category }}
              </a>
              <span>&thinsp;</span>
            </template>
            <div v-else class="btn btn-xs btn-secondary btn-disabled rounded-full">
              {{ themeConfig.infoTest.noCategory }}
            </div>
            <template v-if="hasTags">
              <a
                v-for="(tag, index) in tags"
                :key="index"
                :href="`/blog/tag/${tag}`"
                class="btn btn-xs btn-secondary"
              >
                {{ tag }}
              </a>
              <span>&thinsp;</span>
            </template>
            <div v-else class="btn btn-xs btn-secondary btn-disabled">
              {{ themeConfig.infoTest.noTag }}
            </div>
          </div>
        </div>
        <hr>
      </template>
      <slot />
      <template v-if="isBlog">
        <License :title="title" :url="url" />
        <CommentWaline />
      </template>
    </div>
  </div>
</template>
