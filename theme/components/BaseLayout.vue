<script setup lang="ts">
import { ref } from 'vue'

const includeSidebar = ref(true)
</script>

<template>
  <Header title="{SITE_TITLE}" />
  <div class="m-auto max-w-7xl">
    <div
      class="relative top-16 grid grid-cols-1 gap-4 p-0 md:top-0 lg:grid-cols-4 md:grid-cols-5 lg:p-4 md:p-0"
    >
      <div
        v-if="includeSidebar"
        class="top-4 order-2 hidden bg-white bg-opacity-0 p-2 md:order-1 md:col-span-1 md:inline max-md:hidden"
      >
        <ProfileCard />
        <CategoryCard />
        <TagCard />
        <Content />
      </div>
      <div
        class="order-1 col-span-3 bg-white bg-opacity-0 p-2 md:order-2 lg:col-span-3 md:col-span-4"
      >
        <div>
          <main>
            <slot />
          </main>
          <Footer />
          <br>
        </div>
      </div>
    </div>
  </div>
</template>
