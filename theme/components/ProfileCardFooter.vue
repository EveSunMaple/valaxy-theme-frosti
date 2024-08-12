<script setup lang="ts">
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <div class="bg-base-200 items-center justify-center rounded-lg p-4" flex="~">
    <a
      v-for="icon in themeConfig.socialIcons"
      :key="icon.href"
      :href="icon.href"
      target="_blank"
      class="m-[0_5px] inline-block w-[30px] rounded-[10px] text-center text-xl leading-[30px] no-underline"
      :aria-label="icon.ariaLabel"
      :title="icon.title"
      :class="icon.icon"
    />
  </div>
</template>
