<template>
  <NuxtLayout>
    <SpeedInsights />
    <NavBar />
    <NuxtPage
      class="max-w-3xl md:m-auto md:mt-16 md:pb-16 pb-4 m-6 pt-28 md:pt-16 text-white dark:text-white min-h-screen"
    />
    <UNotifications />
  </NuxtLayout>
</template>

<script lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default {
  components: { SpeedInsights },
};
</script>
