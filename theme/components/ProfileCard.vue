<script setup lang="ts">
import { useSiteConfig } from 'valaxy'

const siteConfig = useSiteConfig()
</script>

<template>
  <div
    class="card bg-base-100 sticky mb-8 w-full flex flex-col gap-4 p-4 shadow-xl lg:relative md:sticky"
  >
    <div class="avatar p-4">
      <img
        class="mask mask-circle"
        :src="siteConfig.author.avatar"
        alt="Profile"
        width="300"
        height="300"
        loading="eager"
      >
    </div>
    <ProfileCardMenu />
    <ProfileCardFooter />
  </div>
</template>
