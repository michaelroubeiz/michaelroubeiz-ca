<template>
  <NuxtLayout>
    <SpeedInsights />
    <NavBar />
    <NuxtPage class="max-w-3xl m-auto mt-16 pb-16" />
  </NuxtLayout>
</template>

<script lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default {
  components: { SpeedInsights },
};
</script>

<style>
body {
  background-color: #0b192f;
}
</style>
