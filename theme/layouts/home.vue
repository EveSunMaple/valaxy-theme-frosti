<template>
  <BaseLayout title="Home">
    <BaseCard title="Home">
      <div class="flex">
        <div class="p-6">
          <h1>Hi there! 👋</h1>
          <p>This is the Frosti theme</p>
          <p>A clean, elegant, and fast static blog template</p>
        </div>
      </div>
    </BaseCard>

    <BaseCard title="Home" image="/index.webp">
      <RouterView />
    </BaseCard>
  </BaseLayout>
</template>
