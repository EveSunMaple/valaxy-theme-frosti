<script setup lang="ts">
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <ul class="menu bg-base-100 m-0 w-full flex flex-col items-center lg:items-start">
    <li v-for="item in themeConfig.menuItems" :key="item.id" class="relative w-full">
      <details v-if="item.subItems" class="menu-item">
        <summary class="items-center justify-center p-4 text-center text-xl font-bold lg:justify-start lg:text-xl md:text-3xl">
          <span class="justify-center" :class="item.icon" />
          <span class="ml-2 hidden lg:inline">{{ item.text }}</span>
        </summary>
        <ul>
          <li
            v-for="subItem in item.subItems"
            :key="subItem.id"
            class="menu-item"
          >
            <a
              :id="`header-${subItem.id}`"
              tabindex="0"
              class="p-4 text-xl font-bold"
              :href="subItem.href"
              :target="subItem.target || '_self'"
              :aria-label="subItem.text"
            >
              <span class="inline-flex justify-center" :class="item.icon" />
              <span class="ml-2 hidden lg:inline">{{ subItem.text }}</span>
            </a>
          </li>
        </ul>
      </details>
      <a
        v-else
        :id="item.id"
        tabindex="0"
        class="flex items-center justify-center p-4 text-center text-xl font-bold lg:justify-start lg:text-xl md:text-3xl"
        :title="item.id"
        :href="item.href"
        :target="item.target || '_self'"
      >
        <span class="inline-flex justify-center" :class="item.icon" />
        <span class="ml-2 hidden lg:inline">{{ item.text }}</span>
      </a>
    </li>
  </ul>
</template>
