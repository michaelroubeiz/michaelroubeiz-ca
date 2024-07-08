<template>
  <NuxtLayout>
    <SpeedInsights />
    <NavBar />
    <NuxtPage
      class="max-w-3xl md:m-auto md:mt-16 lg:pb-16 m-6 pt-28 md:pt-16 text-white dark:text-white"
    />
  </NuxtLayout>
</template>

<script lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default {
  components: { SpeedInsights },
};
</script>
